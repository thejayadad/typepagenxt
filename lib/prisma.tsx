import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | undefined;

const prismaClientSingle = (): PrismaClient => {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
};

const globalForPrisma: any = globalThis;

export default prismaClientSingle();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
