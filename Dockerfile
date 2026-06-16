# syntax=docker/dockerfile:1

FROM node:22-alpine AS deps
WORKDIR /app

# Installer les deps (cache-friendly)
COPY package.json ./
COPY package-lock.json ./
RUN npm install


FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js (standalone si configuré, sinon on retombe sur le mode classique)
RUN npm run build


FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# User non-root
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder /app/ .

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]