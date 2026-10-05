# Fleet Dashboard

Standalone web dashboard voor de GitHub Fleet Manager.

## Features

- Real-time fleet status
- Script performance monitoring
- API rate limit tracking
- Cron job monitoring
- Telegram alerts

## Installatie

```bash
git clone https://github.com/itsdarklikehell/fleet-dashboard.git
cd fleet-dashboard
docker-compose up -d
```

## Gebruik

Open http://localhost:3000 in je browser.

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
