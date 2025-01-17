'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';

const projects = [
  { 
    id: 1, 
    title: 'Skinvisions', 
    description: 'Skin Disease Detection System', 
    image: '/skinv2.jpg', 
    category: ['Web', 'Mobile'], 
    githubLink: 'https://github.com/RusiriniWijethunga/POMO-Figma-Plugin',
    figmaLink: 'https://www.figma.com/design/ZcxYV5Jn4Z08e1qJkrruY2/Derma-AI?node-id=283-780&t=fO9C3E9QPmLKnIQi-1', 
    websiteLink: 'https://www.example1.com' 
  },
  { 
    id: 2, 
    title: 'SUJCS', 
    description: 'Journal Website of SUSL', 
    image: '/sujcss.jpg', 
    category: ['Web', 'Design'], 
    githubLink: 'https://github.com/Tharindu-Lakmal/SUJCS_Web_Project',
    figmaLink: 'https://www.figma.com/design/7xmkVYucZaQ8oGNapqmchB/SUJCS-Project?node-id=0-1&t=yc0Rb68eW5VRRuiY-1', 
    websiteLink: 'https://www.example2.com' 
  },
  { id: 3, title: 'E-Cycle Zone', description: 'Bicycle Mart for US Audience', image: '/cycle.png', category: ['Web'], websiteLink: 'https://www.ecyclezone.com/' },
  { id: 4, title: 'Smart Lottery Scanner', description: 'Lottery Result Holder', image: '/lotttery.jpg', category: ['Mobile', 'Design'], githubLink: 'https://github.com/sumira/lottery-scanner-app', figmaLink: 'https://www.figma.com/design/20DX6KwuUUcUGWYdQM1Tiz/Smart-Lottery-scanner?node-id=1-2&t=V5LviAw92HMdbOzj-1', },
  { id: 5, title: 'Vishwa Institute', description: 'Institute Management System', image: '/vishwa.jpg', category: ['Design', 'Web'],  figmaLink : 'https://www.figma.com/design/WS29lEV0qu8bA2fNuunV2U/Vishwa-Web?node-id=57-71&t=2ceGKCTGjZDDOrbD-1', websiteLink: 'vishwa-institute.vercel.app' },
  { id: 6, title: 'POMO', description: 'A Figma Plugin', image: '/plug.jpg', category: ['Mobile', 'Web'], githubLink: 'https://github.com/RusiriniWijethunga/POMO-Figma-Plugin' }
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures client-side rendering
  }, []);

  // Updated filtering logic
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  if (!isClient) return null; // Avoids hydration errors by not rendering on the server side

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Purple and light blue gradient backgrounds */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500 rounded-full opacity-20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-300 rounded-full opacity-20 blur-[100px]" />
      </div>

      {/* Main content */}
      <main className="relative min-h-screen flex flex-col items-center justify-center p-6 pt-24">
        <div className="text-center z-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-8xl font-light mb-4">Tharushi</h1>
            <div className="space-y-8">
              <div>
                <p className="text-gray-400 mb-1">/ˈtɑː.ruː.ʃiː/</p>
                <p className="text-gray-400 italic mb-2">noun</p>
                <p className="text-2xl">Advocate for growth and collaboration</p>
              </div>

              <div>
                <p className="text-gray-400 italic mb-2">verb</p>
                <ol className="list-none list-inside space-y-2">
                  <li className="text-2xl">Create and innovate</li>
                  <li className="text-2xl">Influence and inspire</li>
                </ol>
              </div>

              <div>
                <p className="text-gray-400 italic mb-2">adjective</p>
                <ol className="list-none list-inside">
                  <li className="text-2xl">Open-minded, detail-oriented</li>
                </ol>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(true)}
                className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors mt-4"
              >
                Actually...
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl z-10 mt-8"
        >
          <h2 className="text-4xl font-light mb-16 text-center">Projects</h2>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 p-2 rounded-full flex space-x-2">
              {['All', 'Web', 'Mobile', 'Design'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 text-sm md:text-base ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 rounded-lg overflow-hidden"
              >
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  
                  <div className="flex space-x-4 mt-4">
                    {/* GitHub Link */}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400"
                      >
                        <i className="fab fa-github fa-lg"></i>
                      </a>
                    )}
                    
                    {/* Figma Link */}
                    {project.figmaLink && (
                      <a
                        href={project.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400"
                      >
                        <i className="fab fa-figma fa-lg"></i>
                      </a>
                    )}
                    
                    {/* Website Link */}
                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400"
                      >
                        <i className="fas fa-external-link-alt fa-lg"></i>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black/50 p-16 rounded-3xl max-w-3xl text-center"
            >
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-4xl font-light mb-4">Nothing defines me. LOL!</h2>
                <Image
                  src="/sticker.png"
                  alt="Funny or relevant image"
                  width={250}
                  height={250}
                  className="rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <p
  className="text-4xl font-light italic mb-2 text-center"
  style={{ marginTop: '2cm', fontFamily: '"Brush Script MT", cursive' }}
>
  Also,
</p>
<p
  className="text-4xl font-light italic mb-2 text-center"
  style={{ fontFamily: '"Brush Script MT", cursive' }}
>
  Volunteering is my passion; it’s where my heart finds purpose and joy.
</p>


      {/* Tech Stack Section */}
      <div className="text-gray-400 text-lg mt-8">
        <div className="flex items-center justify-center gap-8 mt-2">
          {/* Add two logos here */}
          <div className="w-64 h-64 relative">
            <Image
              src="/AIESEC-Logo.png" // Replace with your first logo path
              alt="Logo 1"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-64 h-64 relative">
            <Image
              src="/ieee-removebg-preview.png" // Replace with your second logo path
              alt="Logo 2"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-64 h-64 relative">
            <Image
              src="/454360279_831406852527328_2641255093797148809_n-removebg-preview.png" // Replace with your second logo path
              alt="Logo 2"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-40 h-40 relative">
            <Image
              src="/Logo.png" // Replace with your second logo path
              alt="Logo 2"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        
      </div> 
      <section className=" text-gray-400 py-16 w-full backdrop-blur-sm">
  {/* Purple and light blue gradient backgrounds */}
  <div className="fixed inset-0 z-0">
    <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500 rounded-full opacity-20 blur-[100px]" />
    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-300 rounded-full opacity-20 blur-[100px]" />
  </div>

  <div className="max-w-4xl mx-auto px-6 flex items-center justify-between relative z-10">
    <div className="w-full">
      <h2 className="text-2xl font-light mb-8">Every Great Idea Deserves a Conversation!</h2>
      <h3 className="text-xl font-bold mb-8">Let’s Connect and Make It Happen...</h3>
      <form className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div className="w-1/3 ml-24">
      <img
        src="/sticker (1).png" // Replace with your image URL
        alt="Contact Image"
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
</section>

      <footer
  className="relative bg-black/10 text-gray-400 py-8 text-center w-full backdrop-blur-sm"
  style={{
    backgroundImage: 'url("/path-to-your-background-image.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Reduced transparency to 10% */}
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
      <span className="text-green-400">❤</span> by{' '}
      <span className="font-cursive">Tharushi Wijethunga</span>
    </p>
  </div>
</footer>
    </div>
  );
}
   
