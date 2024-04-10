import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="relative bg-transparent">
      {/* Background Image */}
      <div
        className="relative bg-transparent mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
        style={{
          backgroundImage: `url("/interior-design.jpeg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mx-3 mb-5">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-gray-500">
           We Create Your Space Better
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-8">
          Your home should tell the story of who you are, and be a collection of what you love.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started <span aria-hidden="true">→</span>
            </a>
           
          </div>
        </div>
      </div>

      {/* Navbar */}
      
    </div>
  );
}

export default Home;
