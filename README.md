# Microservices Workspace

This folder is a starter template for running multiple microservices in one project.

## Structure

- `services/`: all service apps live here
- `shared/`: shared libraries/utilities across services
- `infra/`: infrastructure files (env, scripts, etc.)
- `docker-compose.yml`: run all services together

## Quick Start

1. Install Docker Desktop.
2. From this folder, run:

```bash
docker compose up --build
```

3. Open in browser:
   - `http://localhost:3001` to `http://localhost:3010` for Service 1-10 pages
4. Test health endpoints:
   - `http://localhost:3001/health`
   - `http://localhost:3010/health`

## Add a New Service

1. Copy an existing service folder from `services/`.
2. Update:
   - service name in `package.json`
   - port in `.env` and `src/index.js`
   - service block in `docker-compose.yml`
3. Rebuild:

```bash
docker compose up --build
```
