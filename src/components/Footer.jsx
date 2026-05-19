import React from 'react'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white px-10 py-16"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-[#6e06f2] mb-6">
          Let's Connect
        </h1>

        <p className="text-gray-400 text-lg mb-10">
          Feel free to connect with me through these platforms.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 flex-wrap">

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111] px-6 py-3 rounded-2xl border border-gray-700 hover:border-[#6e06f2] hover:scale-105 transition-all duration-300"
          >
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111] px-6 py-3 rounded-2xl border border-gray-700 hover:border-[#6e06f2] hover:scale-105 transition-all duration-300"
          >
            GitHub
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111] px-6 py-3 rounded-2xl border border-gray-700 hover:border-[#6e06f2] hover:scale-105 transition-all duration-300"
          >
            LeetCode
          </a>

          {/* Email */}
          <a
            href="mailto:gitikachahar@gmail.com"
            className="bg-[#111] px-6 py-3 rounded-2xl border border-gray-700 hover:border-[#6e06f2] hover:scale-105 transition-all duration-300"
          >
            Email
          </a>

        </div>

        {/* Bottom */}
        <div className="mt-10 text-gray-500 border-t border-gray-800 pt-6">
          © 2026 Gitika Chahar | Built with React & Tailwind CSS
        </div>

      </div>
    </footer>
  )
}