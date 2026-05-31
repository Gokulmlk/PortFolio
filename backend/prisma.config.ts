import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  // Neon direct URL — used by Prisma CLI (migrate, db push, studio)
  datasource: {
    url: env("DIRECT_URL"),
  },
});
