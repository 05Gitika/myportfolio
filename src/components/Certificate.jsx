import React from "react";

import ibmCertificate from "../assets/ibm.png";
import udemyCertificate from "../assets/udemy.png";

import ibmPdf from "../assets/ibm-certificate.pdf";
import udemyPdf from "../assets/udemy-certificate.pdf";

export default function Certificate() {
  const certificates = [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "January 2026",

      description:
        "Learned the fundamentals of Artificial Intelligence including machine learning concepts, AI applications, and real-world problem solving approaches.",

      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Problem Solving",
      ],

      image: ibmCertificate,
      pdf: ibmPdf,
    },

    {
      title: "Beginner Full Stack Web Development",
      issuer: "Udemy",
      date: "December 2024",

      description:
        "Completed a beginner full stack web development course covering frontend and backend technologies including HTML, CSS, React, and Node.js.",

      skills: [
        "HTML",
        "CSS",
        "React",
        "Node.js",
      ],

      image: udemyCertificate,
      pdf: udemyPdf,
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-[#f5f1fa] py-20 px-6"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        
        <p className="text-purple-700 font-semibold tracking-wider uppercase mb-3">
          Achievements
        </p>

        <h2 className="text-5xl font-bold text-gray-900 mb-5">
          Certifications
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Certifications that helped me strengthen my skills in
          Artificial Intelligence, Full Stack Web Development,
          and modern software technologies.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-12">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="
              bg-white/70
              backdrop-blur-md
              border border-purple-200
              rounded-3xl
              overflow-hidden
              shadow-xl
              hover:shadow-purple-300/40
              transition-all
              duration-300
              hover:scale-[1.01]
            "
          >
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
              
              {/* Image Section */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-2xl
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center">
                
                {/* Issuer */}
                <p className="text-purple-700 font-semibold mb-3 tracking-wide">
                  {cert.issuer}
                </p>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {cert.title}
                </h3>

                {/* Date */}
                <p className="text-gray-500 mb-5">
                  Issued • {cert.date}
                </p>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="
                        px-4 py-2
                        rounded-full
                        text-sm
                        font-medium
                        bg-purple-100
                        text-purple-700
                        border
                        border-purple-200
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* PDF Button */}
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-block
                    w-fit
                    px-7 py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-700
                    to-violet-500
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:from-purple-800
                    hover:to-violet-600
                    shadow-lg
                    shadow-purple-300/40
                    hover:scale-105
                  "
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}