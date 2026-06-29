# Etape 1 : Build de l'application
FROM node:20-alpine AS builder
WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copie du code et build
COPY . .
RUN npm run build

# Etape 2 : Exécution de l'application
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copie des fichiers nécessaires depuis le builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Exposer le port de Next.js
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Démarrage de l'application
CMD ["npm", "start"]
