import { type NextPage } from "next";
import React from "react";
import NavBar from "../components/navBar";
import { trpc } from "../utils/trpc";

const Meetings: NextPage = () => {
  const meetings = trpc.meetings.getMeetings.useQuery();
  console.log("Meetings: ", meetings);
  return (
    <>
      <NavBar />
      <div>meetings</div>
    </>
  );
};

export default Meetings;
