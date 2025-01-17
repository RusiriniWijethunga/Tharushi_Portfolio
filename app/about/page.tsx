'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [showImage, setShowImage] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const scrollToImage = () => {
    setShowImage(true);
    // Smooth scroll to the image section
    setTimeout(() => {
      document.getElementById('profile-image')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="flex flex-col items-center justify-start pt-32 px-6">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto space-y-6 mb-12" // Reduced margin-bottom
        >
          <h1 className="text-4xl font-light">Hi!, I&apos;m Tharushi.</h1>
          <p className="text-gray-400 text-lg">I&apos;m just an explorer.</p>
          <p className="text-gray-400 text-lg">
            I believe design, like music and films, can be very inspiring and heart-touching. I enjoy challenging my
            creativity to build cool things!
          </p>

          {/* Tech Stack Section */}
          <div className="text-gray-400 text-lg mt-8">
            <div className="flex items-center justify-center gap-8 mt-2">
              <div className="w-16 h-16 relative">
                <Image
                  src="/Next.js_Icon_7.jpeg"
                  alt="Next.js"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="w-16 h-16 relative">
                <Image
                  src="/pngegg.png"
                  alt="MongoDB"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="w-8 h-8 relative">
                <Image
                  src="/pngaaa.com-3920388.png"
                  alt="TailwindCSS"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="w-9 h-9 relative">
                <Image
                  src="/pngwing.com (1).png"
                  alt="Figma"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <button
          onClick={scrollToImage}
          className="text-gray-400 text-sm underline underline-offset-4 mt-8 hover:text-white transition-colors mb-8" // Reduced margin-bottom
        >
          Tharushi Wijethunga ?
        </button>

        {/* Profile Image Section */}
        <div>
          <AnimatePresence>
            {showImage && (
              <motion.div
                id="profile-image"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
                className="relative w-[300px] h-[300px] mb-8 overflow-hidden rounded-full" // Reduced size and margin-bottom
              >
                <Image
                  src="/me.jpeg" // Make sure this is the correct path to your image
                  alt="Profile"
                  fill
                  className="object-cover"
                  onLoadingComplete={() => setIsImageLoaded(true)}
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
