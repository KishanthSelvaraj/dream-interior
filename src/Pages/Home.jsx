import React from "react";
import Navbar from "./Navbar";
import a1 from '/about1.jpg'
import a2 from '/about2.jpg'
import a3 from '/about3.jpg'
import a4 from '/about4.jpg'
import a5 from '/about5.jpg'
import a6 from '/about6.jpg'

function Home() {
  return (
    <div className="relative bg-transparent">
      {/* Background Image */}
      <div
        className="relative bg-transparent mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
        style={{
          backgroundImage: `url("/interior-design.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mx-3 mb-5">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-gray-500">
            We Create Your Space Better
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-8">
            Your home should tell the story of who you are, and be a collection
            of what you love.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      {/* about us start */}
      <section
        id="carouselItem2"
        className="overflow-hidden px-5 pt-5 pb-10 lg:pt-[50px] lg:pb-[60px] bg-gray-200 dark:bg-dark"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className=" items-center -mx-3 sm:-mx-4 sm:flex md:flex lg:flex">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={a1}
                      alt=""
                      className="w-full rounded-2xl hidden md:block"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={a4}
                      alt=""
                      className="w-full rounded-2xl hidden md:block"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src={a5}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0 px-3">
                <h2 className="mb-5  text-3xl font-bold text-gray-500 sm:text-[40px]/[48px]">
                 What We do
                </h2>
                <p className="mb-4 text-base lg:text-lg text-gray-800 dark:text-dark-6">
                  We are passionate about transforming spaces into beautiful,
                  functional, and inspiring environments. Our team of skilled
                  designers and architects collaborate seamlessly to bring your
                  vision to life, whether you're revamping a single room or
                  redesigning an entire property.
                </p>
                <p className="mb-4 text-base lg:text-lg text-gray-800 dark:text-dark-6">
                  It aligns internal systems with strategic objectives, ensuring
                  every aspect of the business contributes effectively towards
                  its goals and mission.
                </p>
                <p className="mb-4 text-base lg:text-lg text-gray-800 dark:text-dark-6">
                  ILS streamlines operations amidst complexity, facilitating
                  efficient processes, and equipping businesses with the
                  necessary skills to navigate and thrive in challenging
                  environments.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about us end */}
    </div>
  );
}

export default Home;
