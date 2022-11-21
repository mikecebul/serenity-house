import { type NextPage } from "next";
import Head from "next/head";
import React from "react";
import { trpc } from "../utils/trpc";
// import { sortedMeetingsByDayAndTime } from '../utils/sort'
// import { type Meeting } from "@prisma/client";

const Meetings: NextPage = () => {
  const { data: meetings } = trpc.meetings.getMeetings.useQuery();
  const columns = ["Day", "Time", "Group", "Host", "Type"];

  return (
    <>
      <Head>
        <title>Meetings | Charlevoix Alano Club</title>
        <meta
          name="description"
          content="List of meetings at the Charlevoix Alano Club"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col p-4 overflow-x-auto ">
        <h3 className="my-8 text-center text-4xl font-semibold">
          Meeting List
        </h3>
        {meetings ? (
          <div className="mx-auto items-center rounded shadow-md">
            <table className="whitespace-nowrap text-left text-sm">
              <thead className="bg-slate-800 font-bold uppercase text-slate-100 dark:bg-slate-400 dark:text-slate-900">
                <tr className="">
                  {columns.map((head, idx) => (
                    <th key={idx} className="py-3 px-6">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                {meetings.map((meeting) => (
                  <tr
                    key={meeting.id}
                    className="even:bg-slate-200 even:dark:bg-slate-700"
                  >
                    <td className="py-3 px-6">{meeting.day}</td>
                    <td className="py-3 px-6">{meeting.time}</td>
                    <td className="py-3 px-6">{meeting.group}</td>
                    <td className="py-3 px-6">{meeting.host}</td>
                    <td className="py-3 px-6">{meeting.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No Data</div>
        )}
      </main>
    </>
  );
};

export default Meetings;
