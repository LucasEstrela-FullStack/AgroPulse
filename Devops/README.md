# AgroPulse DevOps

This folder contains DevOps assets for the AgroPulse frontend.

## Structure

```text
Devops/
  Dockerfile
  Dockerfile.dockerignore
  docker-compose.yml
  github/
    workflows/
      ci.yml
      preview.yml
      cd.yml
```

## Local Docker

From the repository root:

```bash
docker compose -f Devops/docker-compose.yml up --build
```

The frontend will be available at:

```text
http://localhost:3000
```

## CI workflow

`Devops/github/workflows/ci.yml` runs:

- `npm ci`
- `npm audit --audit-level=moderate`
- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run build`

## Preview workflow

`Devops/github/workflows/preview.yml` builds the production Docker image for pull requests.

## CD workflow

`Devops/github/workflows/cd.yml` publishes the frontend Docker image to GitHub Container Registry on pushes to `main`.

## Enabling GitHub Actions

GitHub only runs workflow files from `.github/workflows`.
When you are ready to enable automation, copy the files from:

```text
Devops/github/workflows/
```

to:

```text
.github/workflows/
```
