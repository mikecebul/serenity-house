import Image from "next/image";
import Link from "next/link";
import React from "react";
import alanoClub from "../../public/Clubhouse1440.webp";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center w-full lg:mt-0 relative z-0">
        <div className="flex flex-col self-center items-center lg:basis-[47.5%] lg:shrink-0 lg:pl-32 xl:pl-48 relative z-10 px-8">
          <h3 className="dark:text-slate-200 text-xl sm:text-3xl xl:text-2xl lg:text-2xl text-center pt-16 lg:pt-0">
            Welcome to the{" "}
            <span className="block text-4xl sm:text-6xl lg:text-5xl xl:text-6xl dark:text-slate-100 font-semibold">
              Serenity House
            </span>
          </h3>
          <p className="text-center py-8 text-xs sm:text-sm font-light w-64 sm:w-72">
            Providing an alcohol and drug-free environment for recovery programs
          </p>
          <Link
            href="/meetings"
            className="transition hover:scale-105 duration-75 px-6 py-2 dark:bg-pink-700 bg-pink-700 text-white rounded-2xl text-center w-48 font-semibold tracking-wide shadow-lg"
          >
            Find a Meeting
          </Link>
        </div>
        <div className="pt-8 sm:pt-16 lg:pt-0 relative z-0 lg:flex w-full">
          <Image
            src={alanoClub}
            alt="Front door of the Charlevoix Alano Club"
            className="object-cover"
          />
          <svg
            viewBox="0 0 100 100"
            height="100%"
            className="bg-none hidden lg:block absolute"
          >
            <polygon
              points="0,0 0,100 15,0"
              className="dark:fill-slate-800 fill-slate-100"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
