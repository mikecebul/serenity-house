import { type NextPage } from "next";
import Head from "next/head";
import React from "react";
import { trpc } from "../utils/trpc";
// import { sortedMeetingsByDayAndTime } from '../utils/sort'
// import { type Meeting } from "@prisma/client";

const Meetings: NextPage = () => {
  const { data: meetings, isLoading } = trpc.meetings.getMeetings.useQuery();
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
      <main className="flex flex-col overflow-x-auto md:p-4">
        <h3 className="my-8 text-center text-4xl font-semibold">
          Meeting List
        </h3>
        {isLoading ? (
          <div
            role="status"
            className="mx-auto mb-8 animate-pulse space-y-4 divide-y divide-gray-200 rounded border border-gray-200 p-4 shadow dark:divide-gray-700 dark:border-gray-700 md:p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : meetings ? (
          <>
            {/* Mobile display */}
            {meetings.map((meeting) => (
              <div
                key={meeting.id}
                className="grid grid-cols-5 p-2 text-sm even:bg-slate-200 dark:even:bg-slate-700 dark:text-slate-100 md:hidden"
              >
                <div className="flex flex-col col-span-2 w-[100px] mx-auto">
                  <div className="flex justify-center items-center rounded-t-lg bg-blue-800 text-white">
                    <p className="py-1 px-2 text-center">{meeting.day}</p>
                  </div>
                  <div className="flex grow items-center justify-center rounded-b-lg bg-white dark:bg-slate-300 dark:text-slate-900">
                    <p className="py-1 px-2 text-center">
                      {meeting.time}
                    </p>
                  </div>
                </div>
                <div className="col-span-3">
                  <p className="font-semibold">
                    Group: <span className="font-normal">{meeting.group}</span>
                  </p>
                  <p className="font-semibold">
                    Host: <span className="font-normal">{meeting.host}</span>
                  </p>
                  <p className="font-semibold">
                    Type: <span className="font-normal">{meeting.type}</span>
                  </p>
                </div>
                {/* <div className="flex items-center">
                  <button className="h-8 w-24 rounded-full bg-rose-700 text-center text-xs font-semibold tracking-wide text-white shadow-lg transition duration-75 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:bg-rose-700">
                    Join Meeting
                  </button>
                </div> */}
              </div>
            ))}
            {/* MD and up Display */}
            <div className="mx-auto mb-8 hidden items-center rounded shadow-md md:block">
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
          </>
        ) : (
          <div>
            <h3 className="mx-auto text-lg">Oops! Something went wrong...</h3>
          </div>
        )}
      </main>
    </>
  );
};

export default Meetings;
