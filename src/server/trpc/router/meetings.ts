// import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const meetingsRouter = router({
  getMeetings: publicProcedure
    .query(({ctx}) => {
      return ctx.prisma.meeting.findMany();
    }),
});
