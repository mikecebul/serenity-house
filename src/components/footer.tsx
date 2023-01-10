import Link from "next/link";
import type { ReactElement } from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import Map from "./map";
import { env } from "../env/client.mjs";
import Marker from "./marker";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  const alanoClub = {
    lat: 45.315694564004815,
    lng: -85.25995679164798,
  } as google.maps.LatLngAltitudeLiteral

 
  const render = (status: Status): ReactElement => {
    switch (status) {
      case Status.LOADING:
        return <h3>{status} ..</h3>;
      case Status.FAILURE:
        return <h3>{status} ...</h3>;
      case Status.SUCCESS:
        return (
          <Map center={alanoClub}>
            <Marker position={alanoClub} />
          </Map>
        )
    }
  };


  return (
    <footer className="rounded-t-lg bg-slate-50 p-4 shadow dark:bg-slate-700 sm:p-6">
      <div className="flex flex-col space-y-8 md:flex-row md:justify-evenly md:space-y-0">
        <div className="">
          <h2 className="mb-6 text-sm font-semibold uppercase text-slate-900 dark:text-white">
            Pages
          </h2>
          <ul className="text-slate-600 dark:text-slate-400">
            <li className="mb-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/meetings" className="hover:underline">
                Meetings
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-slate-900 dark:text-white">
            Follow us
          </h2>
          <ul className="text-slate-600 dark:text-slate-400">
            <li className="mb-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/groups/2252195235085917"
                className="hover:underline "
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
        {/* Google Map */}
        <Wrapper apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_API} render={render} />
      </div>
      <hr className="my-6 border-slate-200 dark:border-slate-600 sm:mx-auto" />
      <div className="sm:flex sm:items-center sm:justify-between md:px-6">
        <span className="text-sm text-slate-500 dark:text-slate-400 sm:text-center">
          © {year}{" "}
          <Link href="/" className="hover:underline">
            Serenity House™
          </Link>
          . All Rights Reserved.
        </span>
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <a
            href="https://www.facebook.com/groups/2252195235085917"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white"
          >
            <svg
              className="h-5 w-5 fill-slate-700 hover:fill-slate-900 dark:fill-slate-200 dark:hover:fill-slate-50"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              />
            </svg>
            <span className="sr-only">Facebook group page</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
