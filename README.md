# Fleet Dashboard

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

Open http://localhost:3000 in je browser.

### Productie build

```bash
npm run build
npm run preview
```

## Development

```bash
# Dev server met hot reload
npm run dev

# Tests
npm test

# Tests met coverage
npm run test:coverage

# Lint
npm run lint

# Format
npm run format
```

## Deployment

### Docker Compose

```bash
docker-compose up -d
```

### GitHub Pages

1. `npm run build`
2. Push de `dist/` map naar de `gh-pages` branch

### Vercel / Netlify

Importeer de repo en stel de build command in op `npm run build` en de output map op `dist`.

## Projectstructuur

```
fleet-dashboard/
├── index.html          # Hoofdpagina
├── js/
│   └── data.js         # Data module (API calls)
├── tests/
│   ├── dashboard.test.js
│   └── data.test.js
├── .github/workflows/
│   ├── ci.yml          # CI pipeline
│   └── gource.yml      # Gource visualisatie
├── Dockerfile
├── docker-compose.yml
├── vite.config.js
└── package.json
```

## :film_projector: Development visualization

Bekijk de [Gource development video](https://github.com/itsdarklikehell/fleet-dashboard/releases) voor een visuele tijdlijn van de projectgeschiedenis.

Om de video lokaal te genereren:
```bash
gource -1920x1080 --auto-skip-seconds 1 -o gource.ppm
ffmpeg -y -r 60 -i gource.ppm -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p gource.mp4
```

De GitHub Actions workflow (`.github/workflows/gource.yml`) genereert de video automatisch bij elke release.

## Licentie

MIT
