import { type NextPage } from "next";
import React from "react";
import { trpc } from "../utils/trpc";
// import { sortedMeetingsByDayAndTime } from '../utils/sort'

const Meetings: NextPage = () => {
  const meetings = trpc.meetings.getMeetings.useQuery();

  const columns = ["Day", "Time", "Group", "Host", "Type"];
  // const sortedMeetings = sortedMeetingsByDayAndTime(meetings.data);
  return (
    <main className="p-4 flex flex-col">
      <h3 className="my-8 font-semibold text-4xl text-center">
        Meeting List
      </h3>
      {meetings ?
      
      <div className="shadow-md rounded items-center m-auto overflow-x-auto relative">
        <table className="text-sm text-left whitespace-nowrap">
          <thead className="uppercase bg-slate-800 text-slate-100 dark:bg-slate-400 dark:text-slate-900 font-bold">
            <tr className="">
              {columns.map((head, idx) => (
                <th key={idx} className="py-3 px-6">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
            {meetings.data?.map((meeting) => (
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
      : 
      <div>No Data</div>
            }
    </main>
  );
};

export default Meetings;
