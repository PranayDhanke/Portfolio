"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import luffy from "@/images/home/51rayl0HnRL._AC_UF1000,1000_QL80_.jpg";

const About = () => {
  return (
    <div className="About mt-20" id="About">
      <h1 className="font-bold underline underline-offset-8 text-center text-4xl">
        {"<About Me/>"}
      </h1>

      <div className="px-4 md:px-20 py-20 gap-8 grid grid-cols-1 md:grid-cols-3 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className=" w-60 md:w-72 mx-10 md:mx-0 relative md:left-20"
        >
          <Image src={luffy} alt="Luffy" className="rounded-lg shadow-lg"></Image>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 0.5, bounce: 0.6 },
          }}
          viewport={{ once: true }}
          className="p-10 md:p-10 col-span-2 newmorf "
        >
          <span className="text-xl border p-2 border-pri-200 rounded-full">
            Who am I
          </span>
          <div className="mt-8">
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="text-justify"
            >
              My name is Pranay. I am a computer science student, and I am
              working on improving my skills. I am passionate about learning new
              technologies and programming languages. My goal is to become a
              professional in the tech industry, contributing to innovative
              projects and solving real-world problems.
            </motion.p>
          </div>
          <div className="mt-8">
            <h3 className="underline font-bold text-lg">{"Education "}</h3>
            <ul className="list-disc ml-5">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  transition: { type: "spring", duration: 0.5, bounce: 0.2 },
                  y: 0,
                }}
                viewport={{ once: true }}
              >
                Diploma from Government Polytechnic, Arvi in Computer
                Engineering
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  transition: { type: "spring", duration: 0.5, bounce: 0.2 },
                  y: 0,
                }}
                viewport={{ once: true }}
              >
                Currently pursuing a degree from Sipna College of Engineering,
                Amravati in Computer Engineering
              </motion.li>
            </ul>
          </div>
          <div>
            <h3 className="mt-8 font-bold text-lg underline">Experience </h3>
            <span>None</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
