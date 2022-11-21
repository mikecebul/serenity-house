/* eslint-disable @typescript-eslint/no-var-requires */

// npx prisma db seed //

const { PrismaClient } = require("@prisma/client");
const { meetings } = require("./meeting-data");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.meeting.deleteMany();
    console.log("Deleted records in meeting table");

    await prisma.meeting.createMany({
      data: meetings,
    });
    console.log("Added meeting data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
load();
