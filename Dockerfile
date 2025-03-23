FROM node:20-alpine as builder

WORKDIR /home/node
ENV NODE_ENV=build

# Copia o package.json do backend
COPY backend/package*.json ./backend/
WORKDIR /home/node/backend
RUN npm ci

# Volta para /home/node e copia o resto
WORKDIR /home/node
COPY backend/ ./backend
COPY core/ ./core

# Agora entra na pasta do backend e roda prisma, build, etc.
WORKDIR /home/node/backend
RUN npx prisma generate \
    && npm run build \
    && npm prune --omit=dev

# --- Imagem final
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /home/node

COPY --from=builder /home/node/backend/package*.json ./
COPY --from=builder /home/node/backend/node_modules ./node_modules
COPY --from=builder /home/node/backend/dist ./dist
COPY --from=builder /home/node/backend/prisma ./prisma

CMD ["node", "dist/backend/src/main.js"]
