import Image from "next/image";
import Link from "next/link";
import React from "react";
import alanoClub from "../../public/Clubhouse1440.webp";

export default function Hero() {
  return (
    <>
      <div className="relative z-0 flex w-full flex-col items-center lg:mt-0 lg:flex-row">
        <div className="relative z-10 flex flex-col items-center self-center px-8 lg:shrink-0 lg:basis-[47.5%] lg:pl-32 xl:pl-48">
          <h3 className="pt-16 text-center text-xl dark:text-slate-200 sm:text-3xl lg:pt-0 lg:text-2xl xl:text-2xl">
            Welcome to the{" "}
            <span className="block text-4xl font-semibold dark:text-slate-100 sm:text-6xl lg:text-5xl xl:text-6xl">
              Serenity House
            </span>
          </h3>
          <p className="w-64 py-8 text-center text-xs font-light sm:w-72 sm:text-sm">
            Providing an alcohol and drug-free environment for recovery programs
          </p>
          <Link
            href="/meetings"
            className="w-48 rounded-2xl bg-rose-700 px-6 py-2 text-center font-semibold tracking-wide text-white shadow-lg transition duration-75 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:bg-rose-700"
          >
            Find a Meeting
          </Link>
        </div>
        <div className="relative z-0 w-full pt-8 sm:pt-16 lg:flex lg:pt-0">
          <Image
            src={alanoClub}
            alt="Front door of the Charlevoix Alano Club"
            className="object-cover"
          />
          <svg
            viewBox="0 0 100 100"
            height="100%"
            className="absolute hidden bg-none lg:block"
          >
            <polygon
              points="0,0 0,100 15,0"
              className="fill-slate-100 dark:fill-slate-800"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
