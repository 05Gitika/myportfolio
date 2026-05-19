import React from 'react'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-10 py-20 bg-[#f5f5f5]"
    >
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-[#6e06f2] mb-10">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <p className="text-xl leading-9 text-gray-700">
              I'm Gitika Chahar, a pre-final year Computer Science
              student specializing in Data Science at NSUT Delhi.
              I am passionate about building full-stack web
              applications and solving real-world problems using AI.
            </p>

            <p className="text-xl leading-9 text-gray-700 mt-6">
              I enjoy working with React, Node.js, MongoDB and
              exploring Machine Learning concepts. I also actively
              practice Data Structures and Algorithms and have solved
              70+ LeetCode problems.
            </p>

            <p className="text-xl leading-9 text-gray-700 mt-6">
              Beyond coding, I have experience working in teams
              through IEEE, NSS volunteering, and sponsorship roles
              during college events.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-6 text-[#6e06f2]">
              Education
            </h2>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">
                NSUT Delhi
              </h3>

              <p className="text-gray-600">
                B.Tech CSE (Data Science)
              </p>

              <p className="text-gray-600">
                2023 - 2027
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-[#6e06f2]">
              Skills
            </h2>

            <div className="flex flex-wrap gap-4">

              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Tailwind",
                "JavaScript",
                "C++",
                "DSA",
                "REST APIs",
                "GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#6e06f2] text-white px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}