// import { z } from "zod";

import { sortedMeetingsByDayAndTime } from "../../../utils/sort";
import { router, publicProcedure } from "../trpc";

export const meetingsRouter = router({
  getMeetings: publicProcedure
    .query(async ({ctx}) => {
      const meetings = ctx.prisma.meeting.findMany();
      return sortedMeetingsByDayAndTime(await meetings)
    }),
});
