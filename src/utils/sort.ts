import { type Meeting } from "@prisma/client";

const map = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export const sortedMeetingsByDayAndTime = (obj: Meeting[]) => {
  const sortedMeetingsByTime = obj.sort((a, b) => {
    return (
      Date.parse("1970/01/01 " + a.time) - Date.parse("1970/01/01 " + b.time)
    );
  });
  const sortedMeetingsByDay = sortedMeetingsByTime.sort((a, b) => {
    return map[a.day as keyof typeof map] - map[b.day as keyof typeof map];
  });
  return sortedMeetingsByDay;
};
