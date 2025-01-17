"use client";

// Import necessary dependencies
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navigation() {
  // Get the current pathname to highlight the active link
  const pathname = usePathname();
  
  // Define navigation links
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    // { href: '/reachme', label: 'ReachME' },
  ];

  return (
    // Animated navigation bar with initial animation
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full z-50 p-6 flex justify-between items-center backdrop-blur-sm"
    >
      {/* Logo/Home link */}
      <Link href="/">
        <Image 
          src="/signature (1).png" 
          alt="Logo" 
          width={200} 
          height={200} 
          className="cursor-pointer"
        />
      </Link>
      {/* Navigation links */}
      <ul className="flex space-x-8">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link 
              href={href} 
              className={`hover:opacity-10 transition-opacity relative ${
                pathname === href ? 'text-white' : 'text-gray-400'
              }`}
            >
              {label}
              {/* Animated underline for active link */}
              {pathname === href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 top-full h-px w-full bg-white"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
