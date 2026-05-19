import React from 'react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-10 py-20 bg-[#f5f5f5]"
    >
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-[#6e06f2] mb-10">
          Contact Me
        </h1>

        <form className="bg-white p-10 rounded-3xl shadow-xl">

          <div className="mb-6">
            <label className="block text-xl mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-2 border-gray-300 rounded-xl p-4 outline-none focus:border-[#6e06f2]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-xl mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-gray-300 rounded-xl p-4 outline-none focus:border-[#6e06f2]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-xl mb-2">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full border-2 border-gray-300 rounded-xl p-4 outline-none focus:border-[#6e06f2]"
            ></textarea>
          </div>

          <button
            className="bg-[#6e06f2] text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  )
}