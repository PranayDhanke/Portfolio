"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-10 sticky bg-white shadow-md inset-0">
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
              <Link href="#Home" scroll={false}>Home</Link>
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
          <button className="border-2 p-2 text-sm rounded-md border-pri-100">
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
        <div className="md:hidden bg-blue-100 px-6 py-4 text-center ">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer font-semibold">
              <Link href="#Home" scroll={false} onClick={toggleMenu}>Home</Link>
            </li>
            <li className="cursor-pointer font-semibold">
              <Link href="#About" onClick={toggleMenu}>About</Link>
            </li>
            <li className="cursor-pointer font-semibold">
              <Link href="#Work" onClick={toggleMenu}>Works</Link>
            </li>
            <li className="cursor-pointer font-semibold">
              <Link href="#Contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
          <div className="mt-4">
            <button className="border-2 p-2 w-full text-sm rounded-md border-pri-100">
              Download CV
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
