import { PrismaClient } from "@prisma/client";

// Extend the global object to store the Prisma instance in development mode
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create a singleton instance of PrismaClient
const prisma = globalForPrisma.prisma ?? new PrismaClient();

// Save the instance to the global object in development mode
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
