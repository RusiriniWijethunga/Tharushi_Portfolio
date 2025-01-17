'use client';

import Image from 'next/image';

export default function ReachME() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="relative flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: 'url("/A_black_image.jpg")' }}
        ></div>
      </div>

      {/* Contact Form Section */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-4xl flex flex-wrap bg-gray-900 p-8 rounded-lg shadow-xl">
          {/* Form Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-xl font-semibold mb-4">Every masterpiece starts with a chat</h2>
            <p className="text-center text-gray-300 mb-8">Ready to begin? I’m here to help!</p>

            <form className="w-full space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full mt-1 p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full mt-1 p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full mt-1 p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full mt-1 p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden md:block w-1/2 ml-8">
            <Image
              src="/bean bag chair chill.png"
              alt="Creative Image"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
