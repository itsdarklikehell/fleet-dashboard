FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

RUN addgroup -S dashboard && adduser -S dashboard -G dashboard

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

USER dashboard

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
  CMD wget -qO- http://localhost:3000 || exit 1

CMD ["npx", "vite", "preview", "--port", "3000", "--host"]
