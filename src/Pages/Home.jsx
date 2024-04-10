import React from "react";
import Navbar from "./Navbar";
import a1 from "/about1.jpg";
import a2 from "/about2.jpg";
import a3 from "/about3.jpg";
import a4 from "/about4.jpg";
import a5 from "/about5.jpg";
import a6 from "/about6.jpg";
import about from "/home.jpg";
import bedroom from "/bedroom.jpg";
import dinning from "/dinning.jpg";
import kitchen from "/kitchen.jpg";
import hall from "/hall.jpg";

import { MdKitchen } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoBed } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoIosHome } from "react-icons/io";
const callouts = [
    {
      name: 'Relaxing',
      description: 'Bed Room',
      imageSrc:bedroom,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Efficient',
      description: 'Kitchen',
      imageSrc: kitchen,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Welcoming',
      description: 'Dinning Room',
      imageSrc: dinning,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
        name: 'Comfortable',
        description: 'Living Room',
        imageSrc: hall,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      }
  ]
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
              Conduct Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      {/* about us start */}
      <section
        id="carouselItem2"
        className="overflow-hidden px-5 pt-5 pb-10 lg:pt-[50px] lg:pb-[60px] bg-gray-200 dark:bg-dark "
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className=" items-center -mx-3 sm:-mx-4 sm:flex md:flex lg:flex">
                <div className="w-full px-3 sm:px-4 ">
                  <div className="relative z-10 my-4">
                    <img src={about} alt="" className="w-full rounded-2xl" />
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
                  Our transparent pricing ensures that there are no surprises
                  along the way.
                </p>
                <p className="mb-4 text-base lg:text-lg text-gray-800 dark:text-dark-6">
                  Luxury doesn't have to come with a hefty price tag. We work
                  with clients to establish realistic budgets and offer creative
                  solutions to maximize value without compromising on quality or
                  style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about us end */}
{/* All Catogory Content */}
<div className="bg-gray-200">
      <div className="container-lg container-fluid py-3 pb-10">
        <h3 className="text-xl font-bold text-gray-500 sm:text-[30px]/[38px] text-center pt-10 py-8">HOME INTERIOR CATEGORIES</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {/* Cards start */}
          <div className="py-3">
            <div className="p-4 text-center square-card flex flex-col justify-center items-center">
              <MdKitchen className="w-16 h-16 mb-2 text-3xl text-gray-900" />
              <p className="text-sm mb-0 text-gray-600">Kitchen Sets</p>
            </div>
          </div>
          <div className="py-3">
            <div className="p-4 text-center square-card flex flex-col justify-center items-center">
              <IoBagCheckOutline className="w-16 h-16 mb-2 text-3xl text-gray-900" />
              <p className="text-sm mb-0 text-gray-600">Office Furnitures</p>
            </div>
          </div>
          <div className="py-3">
            <div className="p-4 text-center square-card flex flex-col justify-center items-center">
              <HiOutlineOfficeBuilding className="w-16 h-16 mb-2 text-3xl text-gray-900" />
              <p className="text-sm mb-0 text-gray-600">Dining Room</p>
            </div>
          </div>
          <div className="py-3">
            <div className="p-4 text-center square-card flex flex-col justify-center items-center">
              <IoBed className="w-16 h-16 mb-2 text-3xl text-gray-900" />
              <p className="text-sm mb-0 text-gray-600">Bed Room</p>
            </div>
          </div>
          <div className="py-3">
            <div className="p-4 text-center square-card flex flex-col justify-center items-center">
              <HiOutlineSpeakerphone className="w-16 h-16 mb-2 text-3xl text-gray-900" />
              <p className="text-sm mb-0 text-gray-600 ">Music Room</p>
            </div>
          </div>
          <div className="py-3">
            <div className="p-4 text-center square-card flex flex-col justify-center items-center">
              <IoIosHome className="w-16 h-16 mb-2 text-3xl text-gray-900" />
              <p className="text-sm mb-0 text-gray-600">Home Living</p>
            </div>
          </div>
          {/* Cards end */}
        </div>
      </div>
    </div>
{/* All Catogory Content end */}

      {/* services start */}
      <div className="bg-gray-200 pt-10">
      <div className="mx-auto  lg:mx-0 text-center">
          <h2 className=" text-3xl font-bold text-gray-500 sm:text-[40px]/[48px]">Our Services</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-5 sm:py-5 lg:max-w-none lg:py-5">
       

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      {/* services end */}
      {/* testimonial start */}
      {/* <div className="bg-[#D1DCE5]">
  <section className="md:py-10 py-5">
    <h2 className="text-3xl font-bold mb-4 text-center">Customer Testimonials</h2>
    <div className="flex flex-wrap justify-center gap-4 md:px-5 px-3">
      <div className="bg-white p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3">
        <p className="mb-4">
          "I recently purchased a dining set from your store, and I must say I'm thoroughly impressed! The quality of the craftsmanship is exceptional, and the design perfectly complements my home decor. Thank you for providing such exquisite furniture!"
        </p>
        <p className="text-gray-600">- Emily Johnson, Happy Customer</p>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3">
        <p className="mb-4">
          "I've been shopping at your furniture store for years, and each time I'm amazed by the wide selection and the attention to detail in your products. From bedroom sets to office furniture, everything I've purchased has exceeded my expectations. Keep up the fantastic work!"
        </p>
        <p className="text-gray-600">- Michael Adams, Loyal Customer</p>
      </div>
    </div>
  </section>
</div> */}
      {/* testimonial end */}
{/* contact us start */}
{/* Contact Page Start */}
<section className="bg-gray-200 ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="text-3xl font-bold text-gray-500 sm:text-[40px]/[48px] text-center">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16  text-center text-gray-600 text-sm mt-5">
            Looking to upgrade your living space with premium furniture? Don't
            hesitate to reach out! Fill in the form below and let's transform
            your home together.
          </p>
          <form action="#" className="space-y-8">
            <div className="grid lg:flex lg:justify-between">
              <div className="lg:w-1/2 lg:mr-2 py-lg-0 py-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="lg:w-1/2 lg:ml-2 py-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you?"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="flex justify-center">
                 <button
                 type="submit"
                 className=" py-3 px-4 text-sm font-medium text-white rounded-lg bg-gray-500 w-fit hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
                 >
                 Send message
                 </button>
                 </div>

          </form>
        </div>
      </section>
{/* contact us end */}

    </div>
  );
}

export default Home;
