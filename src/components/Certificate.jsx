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
        "Learned core concepts of Artificial Intelligence including machine learning fundamentals, AI applications, problem solving approaches, and industry use cases.",

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
        "Completed a beginner-friendly full stack development course covering frontend and backend technologies including HTML, CSS, React, and Node.js.",

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
      className="bg-black text-white py-20 px-6"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Certifications
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Certifications that helped me build practical skills in
          web development, AI fundamentals, and software engineering.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-10">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="
              bg-zinc-900
              border border-zinc-800
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-cyan-500/20
              hover:border-cyan-400
              transition-all duration-300
              hover:scale-[1.01]
            "
          >
            <div className="grid md:grid-cols-2 gap-6 p-6">
              
              {/* Certificate Image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-2xl
                    hover:scale-105
                    transition duration-500
                  "
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                
                <p className="text-cyan-400 font-medium mb-2">
                  {cert.issuer}
                </p>

                <h3 className="text-3xl font-bold mb-4">
                  {cert.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  Issued: {cert.date}
                </p>

                <p className="text-gray-300 leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1
                        rounded-full
                        text-sm
                        bg-cyan-500/10
                        text-cyan-400
                        border border-cyan-500/20
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
                    px-6 py-3
                    rounded-xl
                    bg-cyan-500
                    text-black
                    font-semibold
                    hover:bg-cyan-400
                    transition
                  "
                >
                  View PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}