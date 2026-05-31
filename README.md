<<<<<<< HEAD
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
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started 🚀

First, install the dependencies:

bash
npm install


### Environment Setup 🛠️

Create a `.env.local` file in the root directory and add your Spotify API credentials:

env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/callback
SPOTIFY_REFRESH_TOKEN=


### Spotify Integration 🎵

This project includes a built-in flow to generate your refresh token:
1. Start the development server using `npm run dev`.
2. Navigate to `http://localhost:3000/api/spotify/login` in your browser.
3. After authorizing, the page will display your `SPOTIFY_REFRESH_TOKEN`.
4. Copy this token into your `.env.local` file to enable the live Spotify playback component.

### Run the App

Finally, run the development server:

bash
npm run dev

# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 4ef57ca1137c02fc2f0c0ba19ca29ce54e76ab1b
