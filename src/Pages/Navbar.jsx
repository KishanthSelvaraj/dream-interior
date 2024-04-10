import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
    {/* Navbar */}
    <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-500">
            Dream Interior
          </h1>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <a
          href="#"
          className="text-md font-semibold leading-6 text-gray-700"
        >
          Home
        </a>
        <a
          href="#"
          className="text-md font-semibold leading-6 text-gray-700"
        >
          About
        </a>
        <a
          href="#"
          className="text-md font-semibold leading-6 text-gray-700"
        >
          Service
        </a>
        <a
          href="#"
          className="text-md font-semibold leading-6 text-gray-700"
        >
          Contact
        </a>
      </Popover.Group>
    </nav>

    {/* Mobile Menu */}
    <Dialog
      as="div"
      className="lg:hidden "
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h1 className="font-bold text-2xl md:text-2xl lg:text-2xl text-gray-500">
              Dream Interior
            </h1>
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3  py-2 text-lg font-semibold leading-7 text-gray-700"
              >
                Home
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-700"
              >
                About
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-700"
              >
                Service
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-700"
              >
                Contact
              </a>
            </div>
          
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </div>
  );
}
