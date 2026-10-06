# Fleet Dashboard

[![CI](https://github.com/itsdarklikehell/fleet-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/itsdarklikehell/fleet-dashboard/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/itsdarklikehell/fleet-dashboard)](LICENSE)

Standalone web dashboard voor de GitHub Fleet Manager. Real-time status van scripts, cron jobs, repos en services in een donker, responsive interface.

## Features

- **Real-time fleet status** — overzicht van alle fleet componenten
- **Script performance monitoring** — bijhouden van script-statistieken
- **API rate limit tracking** — monitor GitHub API limieten
- **Cron job monitoring** — status van geplande taken
- **Telegram alerts** — notificaties bij storingen
- **Donker thema** — GitHub-achtige dark mode
- **Responsive** — werkt op desktop, tablet en mobiel

## Tech Stack

- **Vite** — build tool en dev server
- **Vitest** — test framework
- **Docker** — containerisatie
- **GitHub Actions** — CI/CD en Gource visualisatie

## Installatie

### Docker (aanbevolen)

```bash
git clone https://github.com/itsdarklikehell/fleet-dashboard.git
cd fleet-dashboard
docker-compose up -d
```

### Lokaal

```bash
git clone https://github.com/itsdarklikehell/fleet-dashboard.git
cd fleet-dashboard
npm install
npm run dev
```

## Gebruik

```bash
# Start de ontwikkelserver
npm run dev

# Build voor productie
npm run build

# Start productie server
npm run preview
```

## API Endpoints

| Method | Path | Beschrijving |
|--------|------|--------------|
| GET | `/api/status` | Fleet status |
| GET | `/api/scripts` | Script statistieken |
| GET | `/api/cron` | Cron job status |
| GET | `/api/repos` | Repository overzicht |

## Bijdragen

Zie [CONTRIBUTING.md](CONTRIBUTING.md) voor richtlijnen.

## Licentie

MIT — zie [LICENSE](LICENSE) voor details.
