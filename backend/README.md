# Portfolio backend

Express API with Prisma and **Neon** PostgreSQL for guestbook and Spotify playback.

## Setup

1. Create a [Neon](https://neon.tech) project and copy **pooled** and **direct** connection strings.
2. Configure `backend/.env` (see `.env.example`).
3. Run:

```bash
npm install
npx prisma migrate deploy
npm run dev
```

### Neon + Prisma 7

| Variable | Neon connection type | Used by |
|----------|----------------------|---------|
| `DATABASE_URL` | Pooled (`-pooler` host) | Express / `PrismaClient` at runtime |
| `DIRECT_URL` | Direct (non-pooler host) | Prisma CLI via `prisma.config.ts` |

Connection URLs live in **`prisma.config.ts`** (not `schema.prisma`). Both URLs should include `?sslmode=require`.

Use a **non-pooler** host for `DIRECT_URL` (migrations fail through the pooler on Neon).

## Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/guestbook` | List messages |
| POST | `/api/guestbook` | Create message |
| GET | `/api/spotify/playback` | Current / recent track |
| GET | `/api/spotify/login` | OAuth (dev) |
| GET | `/api/spotify/callback` | OAuth callback (dev) |
