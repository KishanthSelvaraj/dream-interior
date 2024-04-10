import React from "react";
import Navbar from "./Navbar";
import a1 from "/about1.jpg";
import a2 from "/about2.jpg";
import a3 from "/about3.jpg";
import a4 from "/about4.jpg";
import a5 from "/about5.jpg";
import a6 from "/about6.jpg";
import photo1 from "/services1.jpg";
import icon1 from "/Icon1.svg";
import photo2 from "/services2.jpg";
import icon2 from "/Icon2.svg";
import photo3 from "/services3.jpg";
import icon3 from "/Icon3.svg";
import photo4 from "/services4.jpg";
import icon4 from "/Icon4.svg";
const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
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
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img src={a5} alt="" className="w-full rounded-2xl" />
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
      {/* services start */}
      <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
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
      {/* how we work start */}
      <div className="container md:px-10 bg-gray-200 howWeWork">
        <div className="how-title  ml-10">
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-6'>How We Work</h1>
          <p className='text-lg'>
            It is a long established fact will be distracted.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="how-content">
            <div className="hc-img">
                <img src={"https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='concept'></img>
            </div>
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon1} alt="icon"></img>
                    <p>01</p>
                </div>
                <div className="hc-subtext">
                    <h2 className='text-xl'>Elevate Your Space</h2>
                    <p className='text-lg'>Transform ordinary rooms into extraordinary spaces with our innovative interior design solutions. Let us redefine your living or working environment, turning your vision into reality.</p>
                </div>
            </div>
        </div>
            
        <div className="how-content">
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon2} alt="icon"></img>
                    <p>02</p>
                </div>
                <div className="hc-subtext">
                    <h2 className='text-xl'>Tailored Design Excellence</h2>
                    <p className='text-lg'>Experience bespoke interior design tailored to your unique style and preferences. From concept to execution, our team crafts personalized solutions that reflect your personality and elevate your lifestyle.</p>
                </div>
            </div>
            <div className="hc-img">
                <img src={"https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='concept'></img>
            </div>
        </div>
        
        <div className="how-content">
            <div className="hc-img">
                <img src={"https://images.pexels.com/photos/6301180/pexels-photo-6301180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='concept'></img>
            </div>
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon3} alt="icon"></img>
                    <p>03</p>
                </div>
                <div className="hc-subtext">
                    <h2 className='text-xl'>Timeless Elegance</h2>
                    <p className='text-lg'>Discover timeless elegance and sophistication in every detail. Our interior design expertise combines classic elements with contemporary flair to create spaces that stand the test of time.</p>
                </div>
            </div>
        </div>
        
        <div className="how-content">
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon4} alt="icon"></img>
                    <p>04</p>
                </div>
                <div className="hc-subtext">
                    <h2 className='text-xl'>Inspired by Nature</h2>
                    <p className='text-lg'>Immerse yourself in spaces inspired by the beauty of nature. Our designs seamlessly integrate natural elements, bringing harmony and serenity into your home or office environment.</p>
                </div>
            </div>
            <div className="hc-img">
                <img src={"https://images.pexels.com/photos/6969824/pexels-photo-6969824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='concept'></img>
            </div>
        </div>
      </div>
      {/* how we work end */}
    </div>
  );
}

export default Home;
