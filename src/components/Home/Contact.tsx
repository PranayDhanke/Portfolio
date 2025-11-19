"use client";

import { motion } from "framer-motion";
import React, { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa'; // Icons for info section
import 'react-toastify/dist/ReactToastify.css';
import { IconBase, IconType } from "react-icons";

// Input field styles for consistency
const inputClass = `mt-2 block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition duration-150 text-gray-800`;

export default function Contact() {
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [user_subject, setUser_subject] = useState("");
  const [user_message, setUser_message] = useState("");
  const [sending, setSending] = useState(false);
  const [hp, setHp] = useState(""); // honeypot field

  const resetForm = () => {
    setUser_name("");
    setUser_email("");
    setUser_subject("");
    setUser_message("");
  };

  const handlesubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (hp) return; // silently drop spam

    if (!user_name || !user_email || !user_subject || !user_message) {
      toast.warn("Please fill all required fields.");
      return;
    }

    setSending(true);

    const payload = {
      name: user_name,
      email: user_email,
      subject: user_subject,
      message: `From: ${user_email}\n\n${user_message}`,
    };

    try {
      // NOTE: Replace "/api/sendMail" with a working endpoint if deploying.
      // For demonstration, we'll simulate a successful API call.
      // const res = await fetch("/api/sendMail", { ... }); 
      
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      const mockSuccess = true; // Assume success for this example

      if (mockSuccess) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        resetForm();
      } else {
        // const text = await res.text();
        // console.error("Mail error:", text);
        toast.error("Oops! Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error — please check your connection.");
    } finally {
      setSending(false);
    }
  };

  const InfoBlock = ({ icon, title, content, link } : { icon:IconType , title:string , content:string , link:string} ) => (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
      <IconBase className="text-2xl text-indigo-600 mt-1 flex-shrink-0" />
      <div>
        <div className="text-sm font-bold text-gray-900">{title}</div>
        {link ? (
          <a href={link} className="text-base text-gray-700 hover:text-indigo-600 transition">
            {content}
          </a>
        ) : (
          <div className="text-base text-gray-700">{content}</div>
        )}
      </div>
    </div>
  );


  return (
    <section id="Contact" className="py-24 bg-gray-50">
      <ToastContainer position="bottom-right" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          &lt;<span className="text-indigo-600">Get In Touch</span> /&gt;
        </motion.h2>
        <p className="text-center text-lg text-gray-500 mb-16">
          Have a project idea or need a collaborator? Send me a message!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoBlock 
                icon={FaEnvelope} 
                title="Email Address" 
                content="pranaydhanke33@gmail.com" 
                link="mailto:pranaydhanke33@gmail.com"
              />
              <InfoBlock 
                icon={FaPhone} 
                title="Phone Number" 
                content="+91 83291 23649" 
                link="tel:+918329123649"
              />
              <InfoBlock 
                icon={FaMapMarkerAlt} 
                title="Location" 
                content="Maharashtra, India (GMT+5:30)" 
                link=""
              />
              <InfoBlock 
                icon={FaPaperPlane} 
                title="Availability" 
                content="Open for internships & freelance"
                link="" 
              />
            </div>
            
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29836.410761164356!2d78.28394594209705!3d20.80943117000294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4736b706429c5%3A0x47c69c8f772630dd!2sSalfal%20Heti%2C%20Maharashtra%20442302!5e0!3m2!1sen!2sin!4v1718550204629!5m2!1sen!2sin"
                width="100%"
                height="400"
                loading="lazy"
                className="block"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <form onSubmit={handlesubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-5 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send a Message</h3>
              
              {/* honeypot */}
              <label className="sr-only" aria-hidden>
                Don’t fill this
                <input name="hp" value={hp} onChange={(e) => setHp(e.target.value)} />
              </label>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Your Name</label>
                <input
                  id="name"
                  type="text"
                  value={user_name}
                  onChange={(e) => setUser_name(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Your Email</label>
                <input
                  id="email"
                  type="email"
                  value={user_email}
                  onChange={(e) => setUser_email(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Subject</label>
                <input
                  id="subject"
                  type="text"
                  value={user_subject}
                  onChange={(e) => setUser_subject(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={user_message}
                  onChange={(e) => setUser_message(e.target.value)}
                  className={`${inputClass} resize-y`}
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-bold shadow-lg shadow-indigo-200 transition duration-300 ${sending ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-4 focus:ring-indigo-300`}
                >
                  {sending ? (
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                  ) : null}
                  <span>{sending ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>

              <div className="text-xs text-gray-500 text-center pt-2 border-t border-gray-100">I respect your privacy. All fields are required.</div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}