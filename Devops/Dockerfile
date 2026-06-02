FROM node:26-bookworm-slim AS deps
WORKDIR /app/Front-end

COPY Front-end/package.json Front-end/package-lock.json ./
RUN npm ci

FROM node:26-bookworm-slim AS builder
WORKDIR /app/Front-end

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/Front-end/node_modules ./node_modules
COPY Front-end ./
RUN npm run build

FROM node:26-bookworm-slim AS runner
WORKDIR /app/Front-end

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/Front-end/package.json ./package.json
COPY --from=builder /app/Front-end/package-lock.json ./package-lock.json
COPY --from=builder /app/Front-end/node_modules ./node_modules
COPY --from=builder /app/Front-end/.next ./.next
COPY --from=builder /app/Front-end/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "run", "start"]
