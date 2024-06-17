"use client"
import Link from "next/link";
import {motion } from "framer-motion"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="p-3 text-white w-full bg-black text-center">
      <span className="font-bold text-lg">Thank you</span>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { type: "spring", duration: 0.5, bounce: 0.7 },
        }}
        viewport={{ once: true }}
        className="flex md:hidden gap-3 mt-2 bg-pri-200 items-center
       p-4 justify-center text-white rounded-2xl"
      >
        <span className="text-xl">Follow on - </span>
        <Link
          target="_blank"
          href={"https://www.instagram.com/pranaydhanke33/"}
        >
          <FaSquareInstagram className="text-2xl cursor-pointer" />
        </Link>
        <Link
          href={
            "https://twitter.com/pranaydhanke33?t=hrHjKL9cuivSUcV424V8ew&s=08"
          }
          target="_blank"
        >
          <FaSquareXTwitter className="text-2xl cursor-pointer" />
        </Link>
        <Link
          href={"https://in.linkedin.com/in/pranay-dhanke-176a66263"}
          target="_blank"
        >
          <FaLinkedin className="text-2xl cursor-pointer" />
        </Link>
        <Link href={"https://github.com/PranayDhanke"} target="_blank">
          <FaGithubSquare className="text-2xl cursor-pointer" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Footer;
