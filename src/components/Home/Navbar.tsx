"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handledoenload = () => {
    toast.info("Nothing yet");
  };

  
  return (
    <div className="z-10 sticky bg-white shadow-md inset-0">
      <ToastContainer />
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="p-[2px] bg-pri-100"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-between items-center py-4 px-6 md:px-12"
      >
        <div>
          <h1 className="text-2xl text-pri-100 font-bold">PRANAY</h1>
        </div>
        <div className="hidden md:flex justify-between gap-5">
          <ul className="flex gap-5">
            <li className="group cursor-pointer relative font-semibold ">
              <Link href="#Home">Home</Link>
              <span className="absolute -bottom-0 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
            </li>
            <li className="group relative cursor-pointer font-semibold">
              <Link href="#About">About</Link>
              <span className="absolute -bottom-0 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
            </li>
            <li className=" group relative cursor-pointer font-semibold">
              <Link href="#Work">Works</Link>
              <span className="absolute -bottom-0 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
            </li>
            <li className=" group relative cursor-pointer font-semibold">
              <Link href="#Contact">Contact</Link>
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button
            onClick={handledoenload}
            className="relative inline-block font-medium group py-1.5 px-2.5 "
          >
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-green-200 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border border-green-200 group-hover:bg-green-50"></span>
            <span className="relative text-green-600 ">Download CV</span>
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.div>
      {isOpen && (
        <div
          className={`fixed   top-0 left-0 h-screen max-w-72 bg-white p-5 shadow-xl transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 w-full`}
        >
          <ul className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Menu</h1>

            <Link className="liststyle" href="#Home" onClick={toggleMenu}>
              <FaHome />
              <span>Home</span>
            </Link>

            <Link className="liststyle" href="#About" onClick={toggleMenu}>
              <CgProfile />
              <span>About</span>
            </Link>

            <Link className="liststyle" href="#Work" onClick={toggleMenu}>
              <IoCodeWorkingOutline />
              <span>Works</span>
            </Link>

            <Link className="liststyle" href="#Contact" onClick={toggleMenu}>
              <IoIosHelpCircleOutline className="" />
              Contact
            </Link>
          </ul>
          <div className="mt-4">
            <button
              onClick={handledoenload}
              className="border-2 p-2 w-full text-sm rounded-md border-pri-100"
            >
              Download CV
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
