import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-8">
          <Link
            href="https://eventure-000.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-slate-800 rounded-lg shadow-lg p-4 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-80 h-80 flex flex-col justify-center items-center">
              <h2 className="text-lg font-bold text-white mb-1 text-center">
                EVENTURE
              </h2>
              <p className="text-gray-300 text-xs text-center">
                EVENTURE is the solution to finding the hottest and most
                exciting events near you, giving you the ability to find event
                tailor-made for you.
              </p>
            </div>
          </Link>
          <Link
            href="https://movie-project-room-8.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-slate-800 rounded-lg shadow-lg p-4 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-80 h-80 flex flex-col justify-center items-center">
              <h2 className="text-lg font-bold text-white mb-1 text-center">
                FILMO
              </h2>
              <p className="text-gray-300 text-xs text-center">
                FILMO is a movie and actors discovery website for upcoming and
                trending movies and actors.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
