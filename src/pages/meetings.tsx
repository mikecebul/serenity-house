import { type NextPage } from "next";
import React from "react";
import { trpc } from "../utils/trpc";

const Meetings: NextPage = () => {
  const meetings = trpc.meetings.getMeetings.useQuery();
  console.log("Meetings: ", meetings);
  return (
    <main>
      <div>meetings</div>
    </main>
  );
};

export default Meetings;
