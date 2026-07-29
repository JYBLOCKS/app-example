# app-example

Example application with a React/Vite frontend in `web` and a modular Express API in `api`.

## Requirements

- Node.js 22+
- pnpm 11+
- Docker and Docker Compose

## Local Development

```bash
pnpm install
pnpm dev:api
pnpm dev:web
```

The API runs at `http://localhost:3000` and the Vite frontend runs at `http://localhost:5173`. Run the scripts in separate terminals. Vite proxies `/api` requests to Express.

## Docker

```bash
docker compose up --build
```

Open `http://localhost:8080`. Nginx serves the frontend and proxies `/api/*` to Express. Stop the services with:

```bash
docker compose down
```

## API

- `GET /` returns service metadata.
- `GET /api/v1/health` checks the application health.
- `GET /api/v1/ready` is used as the Docker and deployment readiness probe.

The API is organized by responsibility under `src/config`, `src/controllers`, `src/middleware`, and `src/routes`. New domains can add their routes, controllers, and services without concentrating logic in `server.ts`.

## Quality Checks

```bash
pnpm lint
pnpm test
pnpm build
```

The `.github/workflows/ci.yml` workflow runs these checks and verifies that the Docker images start correctly on every push and pull request.
