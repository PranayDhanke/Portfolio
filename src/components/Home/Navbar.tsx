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
    toast.info("Nothing yet")
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
            <li className="cursor-pointer font-semibold">
              <Link href="#Home">Home</Link>
            </li>
            <li className="cursor-pointer font-semibold">
              <Link href="#About">About</Link>
            </li>
            <li className="cursor-pointer font-semibold">
              <Link href="#Work">Works</Link>
            </li>
            <li className="cursor-pointer font-semibold">
              <Link href="#Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button
            onClick={handledoenload}
            className="border-2 p-2 text-sm rounded-md border-pri-100"
          >
            Download CV
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
