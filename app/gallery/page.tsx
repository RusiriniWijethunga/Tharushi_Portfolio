'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/page-transition';
import Image from 'next/image';

const projects = [
  {
    title: 'Codesprint V8.0 | Grand Finale',
    description: 'Journer over 525+ teams and 2400+ delegates from 22+ universities. here we were at Hotel Galadari' ,
    image: '/codesprint1.jpeg',
    category: 'Winning Moments',
  },
  {
    title: 'Idealize 2024 | Grand Finale',
    description: 'Won AI Mastery Award and Strategy Star Award over 30+ universities and 300+ teams. Here we were at Hirizon Campus, Malambe',
    image: '/id.jpeg',
    category: 'Memories',
  },
  {
    title: 'HackX 9.0 | Grand Finale',
    description: 'Secured top 10 over 300+ teams. Here we were at Dialog Axiata Auditorium ',
    image: '/WhatsApp Image 2025-01-16 at 21.05.06.jpeg',
    category: ['Winning Moments', 'Memories'],
  },
  {
    title: 'INSL 2022 | Grand Finale',
    description: 'Project Style Up led us there',
    image: '/insl final.jpeg',
    category: 'Winning Moments',
  },
  {
    title: '1st Runners Up | Fountain Project 2023',
    description: 'with Project Derma AI',
    image: '/industry.jpeg',
    category: ['Winning Moments', 'Memories'],
  },
  {
    title: 'INSL Provincial Competition | Winners',
    image: '/insl5.jpeg',
    category: 'My Journey',
  },
  {
    title: 'Certificate Awarding | Idealize 2024',
    image: '/id4.jpeg',
    category: 'Winning Moments',
  },
  {
    title: 'Codesprint Semifinals 2024',
    description: 'At IIT Bambalapitiya',
    image: '/ideal2.jpeg',
    category: ['Winning Moments', 'Memories'],
  },
  {
    title: 'AI Mastery Award | Idealize 2024 ',
    description: 'Best AI Concept',
    image: '/id3.jpeg',
    category: 'Winning Moments',
  },
  {
    title: 'Coolest Project 2024 ',
    description: 'Organized by StemUP Foundation',
    image: '/cool11.jpeg',
    category: 'Memories',
  },
  {
    title: 'HackX 9.0 Semi Finals',
    description: 'At University of Kelaniya',
    image: '/hackxsemi.jpeg',
    category: 'Memories',
  },
  {
    title: 'INSL 2022 Provincial Competition Day',
    description: 'At Sabaragamuwa University of Sri Lanka',
    image: '/insl prov.jpeg',
    category: ['Winning Moments', 'Memories'],
  },
  {
    title: 'During pitching time at Idealize 2024',
    description: 'Discussion with the judges',
    image: '/cdm2.jpeg',
    category: 'Memories',
  },
  {
    title: 'Codesprint V8.0 Memory',
    description: 'At Hotel Galadari',
    image: '/pulse.jpeg',
    category: 'Memories',
  },
  {
    title: 'INSL 2024 Provincial Competition Day',
    description: 'Collecting Memories',
    image: '/insl prov1.jpeg',
    category: ['Winning Moments', 'Memories'],
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <PageTransition>
      <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-light mb-12 text-center"
        >
          My Journey
        </motion.h1>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 p-2 rounded-full flex space-x-2">
            {['All', 'Winning Moments', 'Memories'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                  activeFilter === filter
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-light mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className="relative bg-black/90 text-gray-400 py-8 text-center w-full backdrop-blur-sm"
        style={{
          backgroundImage: 'url("/path-to-your-background-image.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-4">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://www.linkedin.com/in/tgrw99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a
              href="https://github.com/RusiriniWijethunga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a
              href="https://www.figma.com/@tharushi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <i className="fab fa-figma fa-lg"></i>
            </a>
            <a
              href="https://www.facebook.com/tgr.wijethunga?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/__gavesha__/profilecard/?igsh=ZHY4ZGp0aGJlYzNl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://www.behance.net/tharushwijethu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <i className="fab fa-behance fa-lg"></i>
            </a>
            <a
              href="https://medium.com/@tharushiwijethunga999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <i className="fab fa-medium fa-lg"></i>
            </a>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/7b3bb60d-952c-4a70-9cc1-47992e40bf65"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <i className="fas fa-graduation-cap fa-lg"></i>
            </a>
          </div>
          {/* Footer Text */}
          <p className="text-sm">
            Copyright ©2025 All rights reserved | This template is made with{' '}
            <span className="text-purple-400">❤</span> by{' '}
            <span className="font-cursive">miss.Wijethunga</span>
          </p>
        </div>
      </footer>
    </PageTransition>
  );
}
