import React from "react";
import Spinner from "@/app/components/icons/Spinner";

export default function Animation() {

  return (
    <>
      <div>
        <main
          className="container min-h-screen flex flex-col items-center justify-center gap-y-4 p-10"
        >
          <button
            type="button"
            className="bg-indigo-500 text-white text-3xl p-5 flex items-center gap-x-3 rounded"
            disabled
          >
            <Spinner className='fa-solid fa-spinner animate-spin' size='2x'/>
            Processing...
          </button>

          <span className='h-12 w-12 bg-sky-500 rounded-full animate-ping'/>
          <div className='bg-gray-300 rounded-lg h-10 w-full animate-pulse'/>
          <div className='h-12 w-12 bg-sky-500 rounded-full animate-bounce'/>
        </main>
      </div>
    </>
  );
}