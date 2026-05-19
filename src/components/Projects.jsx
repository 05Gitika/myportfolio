import React from 'react'

const projects = [
  {
    title: "GrievanceAI",
    description:
      "AI-powered complaint management system using MERN stack and Machine Learning.",
  },

  {
    title: "AI Resume Analyzer",
    description:
      "Full-stack AI platform that analyzes resumes using OpenAI API.",
  },

  {
    title: "Expense Tracker",
    description:
      "MERN expense tracking app with charts, authentication and analytics.",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-10 py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-[#6e06f2] mb-14">
          Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] p-8 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300"
            >

              <h2 className="text-3xl font-bold mb-4">
                {project.title}
              </h2>

              <p className="text-gray-600 leading-8">
                {project.description}
              </p>

              <div className="flex gap-4 mt-8">

                <button className="bg-[#6e06f2] text-white px-5 py-2 rounded-xl hover:scale-105 transition-all">
                  Live Demo
                </button>

                <button className="border-2 border-[#6e06f2] text-[#6e06f2] px-5 py-2 rounded-xl hover:bg-[#6e06f2] hover:text-white transition-all">
                  GitHub
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}