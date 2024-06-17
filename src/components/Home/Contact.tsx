"use client";
import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className="mt-20">
      <h1 className="font-bold underline underline-offset-8 text-center text-4xl">
        {"<Contact Me/>"}
      </h1>
      <div className="flex flex-col lg:flex-row p-4 md:p-10 gap-10 justify-around mt-10">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29836.410761164356!2d78.28394594209705!3d20.80943117000294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4736b706429c5%3A0x47c69c8f772630dd!2sSalfal%20Heti%2C%20Maharashtra%20442302!5e0!3m2!1sen!2sin!4v1718550204629!5m2!1sen!2sin"
              width="100%"
              height="400"
              loading="eager"
              className="rounded-lg shadow-lg"
              
              aria-hidden="false"
             
            ></iframe>
          </motion.div>
          <motion.div
          initial={{opacity:0 , x:-50}}
          whileInView={{opacity:1 , x:0}}
          viewport={{once:true}}
          className="relative bg-white shadow-xl rounded-lg p-5 mt-8  mx-auto w-[90%] lg:w-[80%]">
            <div className="mb-4">
              <span className="font-semibold">Address:</span>
              <p>At.Salfal Ta.Arvi Dist.Wardha</p>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Email:</span>
              <p>pranaydhanke33@gmail.com</p>
            </div>
            <div>
              <span className="font-semibold">Contact No.:</span>
              <p>8329123649</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-white p-6 md:p-10 rounded-lg shadow-lg"
        >
          <form action="#" method="POST" className="space-y-6">
            <h1 className="text-center underline font-bold text-xl">
              Contact Me
            </h1>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
