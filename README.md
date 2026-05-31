# Portfolio (monorepo)

- **`frontend/`** — Next.js UI
- **`backend/`** — Express API (Spotify + guestbook) with Prisma + [Neon](https://neon.tech) PostgreSQL

## Quick start

### 1. Neon database

1. Create a project at [console.neon.tech](https://console.neon.tech).
2. Open **Connect** and copy two connection strings:
   - **Pooled** → `DATABASE_URL` in `backend/.env`
   - **Direct** → `DIRECT_URL` in `backend/.env` (used by Prisma migrations)
3. Append `?sslmode=require` if it is not already in the URL.
4. Use the **non-pooler** host for `DIRECT_URL` (required for `prisma migrate`).

### 2. Backend

```bash
cd backend
cp .env.example .env
# Fill DATABASE_URL, DIRECT_URL, and Spotify vars in .env
npm install
npx prisma migrate deploy
npm run dev
```

API: http://localhost:4000

### 3. Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

App: http://localhost:3000

## Spotify setup

1. Add redirect URI in [Spotify Dashboard](https://developer.spotify.com/dashboard): `http://localhost:4000/api/spotify/callback`
2. Set `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET` in `backend/.env`
3. Visit http://localhost:4000/api/spotify/login
4. Copy `SPOTIFY_REFRESH_TOKEN` into `backend/.env`

## Environment

| App | File | Key vars |
|-----|------|----------|
| Backend | `.env` | `DATABASE_URL`, `DIRECT_URL`, `PORT`, `FRONTEND_URL`, Spotify vars |
| Frontend | `.env.local` | `NEXT_PUBLIC_API_URL` |

## Production

- Set Neon **pooled** URL as `DATABASE_URL` and **direct** URL as `DIRECT_URL` on your host (e.g. Railway, Render, Fly).
- Run `npx prisma migrate deploy` in CI or on deploy.
- Set `FRONTEND_URL` to your site origin for CORS.
- Deploy frontend with `NEXT_PUBLIC_API_URL` pointing at the API.
