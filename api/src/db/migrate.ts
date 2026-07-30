import bcrypt from "bcryptjs";
import type { Pool } from "pg";

export async function migrateAndSeed(pool: Pool): Promise<void> {
  await pool.query("CREATE EXTENSION IF NOT EXISTS pgcrypto");
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(), username VARCHAR(100) UNIQUE NOT NULL,
      display_name VARCHAR(150) NOT NULL, email VARCHAR(255) UNIQUE NOT NULL,
      password_hash TEXT NOT NULL, department VARCHAR(100) NOT NULL DEFAULT 'General',
      locale VARCHAR(10) NOT NULL DEFAULT 'en', active BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE TABLE IF NOT EXISTS roles (id SERIAL PRIMARY KEY, name VARCHAR(50) UNIQUE NOT NULL);
    CREATE TABLE IF NOT EXISTS user_roles (user_id UUID REFERENCES users(id) ON DELETE CASCADE, role_id INTEGER REFERENCES roles(id) ON DELETE CASCADE, PRIMARY KEY (user_id, role_id));
  `);
  await pool.query("INSERT INTO roles (name) VALUES ('user'), ('admin') ON CONFLICT (name) DO NOTHING");
  const passwordHash = await bcrypt.hash("test", 12);
  const user = await pool.query<{ id: string }>(
    `INSERT INTO users (username, display_name, email, password_hash, department, locale)
     VALUES ('test', 'Test User', 'test@example.local', $1, 'QA', 'en')
     ON CONFLICT (username) DO UPDATE SET password_hash = EXCLUDED.password_hash
     RETURNING id`, [passwordHash],
  );
  await pool.query(`INSERT INTO user_roles (user_id, role_id) SELECT $1, id FROM roles WHERE name = 'user' ON CONFLICT DO NOTHING`, [user.rows[0]?.id]);
}
