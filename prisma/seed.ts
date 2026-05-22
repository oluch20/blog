import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.post.deleteMany();

  await prisma.post.createMany({
    data: [
      {
        title: "Hello from Prisma",
        date: new Date("2026-05-22T00:00:00.000Z"),
        category: "general",
        content: "First seeded post.",
      },
      {
        title: "Second post",
        date: new Date("2026-05-22T00:00:00.000Z"),
        category: "news",
        content: "Seeded content for testing the app.",
      },
      {
        title: "Third post",
        date: new Date("2026-05-22T00:00:00.000Z"),
        category: "updates",
        content: "Another seeded row for Prisma Studio.",
      },
    ],
  });

  console.log("Seed completed.");
}

main()
  .catch(async (error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
