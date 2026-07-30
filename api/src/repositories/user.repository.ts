import type { Pool } from "pg";
import type { User, UserRole } from "../models/auth.model.js";

type UserRow = {
  id: string;
  username: string;
  display_name: string;
  email: string;
  password_hash: string;
  department: string;
  locale: string;
  roles: UserRole[] | null;
};

export interface UserRepository {
  findByUsername(username: string): Promise<User | null>;
}

export class PostgresUserRepository implements UserRepository {
  constructor(private readonly pool: Pool) {}

  async findByUsername(username: string): Promise<User | null> {
    const result = await this.pool.query<UserRow>(
      `SELECT u.id, u.username, u.display_name, u.email, u.password_hash,
              u.department, u.locale, COALESCE(array_agg(r.name) FILTER (WHERE r.name IS NOT NULL), '{}') AS roles
         FROM users u
         LEFT JOIN user_roles ur ON ur.user_id = u.id
         LEFT JOIN roles r ON r.id = ur.role_id
        WHERE u.username = $1 AND u.active = TRUE
        GROUP BY u.id`,
      [username],
    );
    const row = result.rows[0];
    if (!row) return null;
    return {
      id: row.id,
      username: row.username,
      displayName: row.display_name,
      email: row.email,
      passwordHash: row.password_hash,
      roles: row.roles ?? [],
      metadata: { department: row.department, locale: row.locale },
    };
  }
}
