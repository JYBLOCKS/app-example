import { env } from "./config/env.js";
import { pool } from "./db/pool.js";
import { migrateAndSeed } from "./db/migrate.js";
import { PostgresUserRepository } from "./repositories/user.repository.js";
import { createApp } from "./app.js";

await migrateAndSeed(pool);
createApp(new PostgresUserRepository(pool)).listen(env.port, () => console.log(`API listening on port ${env.port}`));
