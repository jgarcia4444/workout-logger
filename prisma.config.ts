import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  datasource: {
    // Prisma CLI automatically resolves your migrations and studio connections using this URL block
    url: process.env.DATABASE_URL,
  },
});
