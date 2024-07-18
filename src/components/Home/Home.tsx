"use client";
import Image from "next/image";
import React from "react";
import luffy from "@/images/home/luffyt.webp";
import imagebg from "@/images/home/imagebg.png";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  return (
    <div
      id="Home"
      className="grid grid-cols-1 md:grid-cols-6 gap-4 place-items-center p-4"
    >
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="md:col-span-3 pt-20 text-center md:text-left"
      >
        <span className="text-xl border p-2 border-pri-200 rounded-full">
          {"Welcome"}
        </span>
        <h1 className="text-4xl text-pri-100 pt-8">
          I dont care if it works
        </h1>
        <h1 className="text-4xl text-pri-100 pt-8">
          on your machine Its your fault
        </h1>
        <p className="pt-8">Hello I am Pranay Dhanke</p>
        <button className="p-2 border-2 border-pri-200 mt-8 rounded-xl text-sm">
          <Link href={"#Contact"}>Contact Me</Link>
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="md:col-span-2 mt-10 relative w-full flex justify-center"
      >
        <Image
          src={imagebg}
          alt="Background Image"
          className="relative w-full h-auto max-w-md"
        />
        <Image
          src={luffy}
          alt="Luffy"
          className="absolute w-40  md:w-min bottom-16 md:bottom-[5rem] md:right-[7rem] rounded-2xl shadow-2xl"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { type: "spring", duration: 0.5, bounce: 0.7 },
        }}
        viewport={{ once: true }}
        className=" hidden md:ml-24 col-span-1 md:mt-0 h-auto md:flex flex-col gap-3 bg-pri-200 items-center
       p-4 text-white rounded-2xl"
      >
        <span className="text-xl ngr">Follow on - </span>
        <Link
          target="_blank"
          href={"https://www.instagram.com/pranaydhanke33/"}
        >
          <FaSquareInstagram  className="text-2xl hover:bg-red-600 rounded-md cursor-pointer" />
        </Link>
        <Link   href={"https://twitter.com/pranaydhanke33?t=hrHjKL9cuivSUcV424V8ew&s=08"} target="_blank">
          <FaSquareXTwitter className="text-2xl cursor-pointer hover:bg-black rounded-md" />
        </Link>
        <Link href={"https://in.linkedin.com/in/pranay-dhanke-176a66263"} target="_blank">
          <FaLinkedin className="text-2xl cursor-pointer hover:bg-blue-600 rounded-md" />
        </Link>
        <Link href={"https://github.com/PranayDhanke"} target="_blank">
          <FaGithubSquare className="text-2xl cursor-pointer hover:bg-gray-800 rounded-md" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
