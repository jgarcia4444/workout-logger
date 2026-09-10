import "dotenv/config";
import { definePrismaConfig } from "prisma/config";

export default definePrismaConfig({
  skills: {
    agents: ["claude", "cursor", "agents", "devin"],
  },
  datasource: {
    // Prisma CLI automatically resolves your migrations and studio connections using this URL block
    url: process.env.DATABASE_URL,
  },
});
