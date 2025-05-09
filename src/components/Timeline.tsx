"use client";
import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2020-2021",
    title: "The Beginning",
    subtitle: "Learnt Basics and Scratch",
    align: "right"
  },
  {
    year: "2022",
    title: "Started Learning Scripting Languages",
    subtitle: "First Event (ShisTech'22)",
    align: "left"
  },
  {
    year: "2023",
    title: "Peak Year. Learnt Alot.",
    subtitle: "Design Champ. (2nd in WebD), Goonj 5.0 (1st in WebD) & ShisTech'23",
    align: "right"
  },
  {
    year: "2024",
    title: "Learnt More Tech Skills. Got into Marketing and Business.",
    subtitle: "Dynamix'24 (2nd in Comp. Programming) & ShisTech'24 (3rd in Hackathon) ",
    align: "left"
  },
  {
    year: "2025",
    title: "Going in for Internships and Getting Better.",
    subtitle: "",
    align: "right"
  }
];

export default function Timeline() {
  return (
  
    <div className="bg-white min-h-screen py-20 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        /journey
      </h2>

      <div className="relative w-full max-w-4xl">
        {/* Multicolor gradient timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-blue-400 to-pink-500"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`mb-12 flex ${item.align === "right" ? "justify-end" : "justify-start"} w-full relative`}
          >
            <div className="w-1/2 px-4">
              <div className="bg-white p-6 shadow-xl rounded-2xl border border-gray-100">
                <p className="text-gray-600 text-sm italic">{item.year}</p>
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.subtitle}</p>
              </div>
            </div>
            {/* Center timeline dot */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-8 h-8 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center text-sm font-semibold text-gray-500">
              ✓
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
