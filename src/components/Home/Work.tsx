"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import blogimage from "@/images/work/bloggerapp.png";
import egram from "@/images/work/egram.png";
import weatherw from "@/images/work/weatherweb.png"

const Work = () => {
  return (
    <div id="Work" className="mt-20">
      <h1 className="font-bold underline underline-offset-8 text-center text-4xl">
        {"<My Works/>"}
      </h1>
      <div className="p-4 md:p-10">
        <div className="mx-4 md:mx-12 py-5 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{
              transition: {
                duration: 0.5,
                type: "spring",
              },
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="shadow-lg rounded-xl w-full md:w-[55vh] md:h-full p-5 bg-white"
          >
            <Image
              src={blogimage}
              className="rounded-lg"
              alt="Blogger Website"
            />
            <h4 className="mt-5 font-bold">Blogger Website</h4>
            <p className="mt-3">
              This is a blogger website where you can add your blog and also see
              other blogs. This website does not contain any advanced features,
              It is very simple website.
            </p>
            <Link
              className="text-blue-400"
              href={"https://blogger-blue-ten.vercel.app/"}
              target="_blank"
            >
              Link
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{
              transition: {
                duration: 1,
                type: "spring",
              },
              opacity: 10,
              x: 0,
            }}
            viewport={{ once: true }}
            className="shadow-lg rounded-xl w-full md:h-full md:w-[55vh] p-5 bg-white"
          >
            <Image src={egram} className="rounded-lg" alt="Egram Website" />
            <h4 className="mt-5 font-bold">E-Gram Website</h4>
            <p className="mt-3">
              This is a E-Grampanchayat where the admin/offcer of the
              grampanchayat can add the new schemes and the user/people of the
              village can apply for the schemes. It make easier to apply for any
              schemes
            </p>
            <Link
              className="text-blue-400"
              href={"https://e-gram.vercel.app/"}
              target="_blank"
            >
              Link
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{
              transition: {
                duration: 1.5,
                type: "spring",
              },
              opacity: 10,
              x: 0,
            }}
            viewport={{ once: true }}
            className="shadow-lg rounded-xl w-full md:h-full md:w-[55vh] p-5 bg-white"
          >
            <Image
              src={weatherw}
              className="rounded-lg"
              alt="weather Website"
            />
            <h4 className="mt-5 font-bold">Weather Api Website</h4>
            <p className="mt-3">
              This is the simple where the user can see the current weather
              condition of thair city
            </p>
            <Link
              className="text-blue-400"
              href={"https://whetherapp-three.vercel.app/ "}
              target="_blank"
            >
              Link
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
