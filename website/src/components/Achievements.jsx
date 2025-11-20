import React from "react";
import { FaAmazon, FaYoutube, FaLinkedin, FaInstagram, FaBook } from "react-icons/fa";
import CounterK from "./counterK";

const LearnersTrust = () => {
  const data = [
    {
      icon: <FaAmazon size={34} className="text-[#FF9900]" />,
      title: "Amazon Author Page",
      subtitle: "Explore all books written by Pravin",
      url: "https://www.amazon.in/s?k=Pravin+Mishra&i=stripbooks",
    },
    {
      icon: <FaYoutube size={34} className="text-red-500" />,
      title: "11K+ YouTube Subscribers",
      subtitle: "Weekly hands-on cloud tutorials",
      url: "https://www.youtube.com/results?search_query=pravin+mishra",
    },
    {
      icon: <FaLinkedin size={34} className="text-blue-700" />,
      title: "20K+ LinkedIn Followers",
      subtitle: "Daily cloud insights & updates",
      url: "https://www.linkedin.com/in/pravin-mishra-aws-trainer/",
    },
    {
      icon: <FaInstagram size={34} className="text-pink-500" />,
      title: "2K+ Instagram Followers",
      subtitle: "Behind the scenes of cloud teaching",
      url: "https://www.instagram.com/awspravinmishra/",
    },
    {
      icon: <FaBook size={34} className="text-gray-800" />,
      title: "Author of 3 Books",
      subtitle: "Published on Apress & Amazon",
      url: "https://github.com/pravinmishraaws",
    },
  ];

  return (
    <section className="w-full py-12 px-6 font-sans bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-sm text-yellow-600 font-semibold tracking-widest uppercase">
          Community
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
          Trusted by Learners Worldwide
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          A growing global community of cloud aspirants, engineers, and
          professionals learning with Pravin Mishra.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {data.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="mb-5 flex justify-center">{item.icon}</div>

            {/* Title */}
            <h3 className="font-semibold text-lg text-gray-900">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="text-gray-600 text-sm mt-2">{item.subtitle}</p>

            {/* Accent Line */}
            <div className="w-12 h-[3px] bg-yellow-500 mx-auto mt-5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </a>
        ))}
      </div>

      {/* Stats Row */}
      <div className="max-w-6xl mx-auto mt-20 pt-12 border-t border-gray-200">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          {[
            { number: "33000", label: "Total Followers" },
            { number: "11000", label: "YouTube Subs" },
            { number: "20000", label: "LinkedIn Network" },
            { number: "3", label: "Published Books" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-yellow-600">
                <CounterK end={stat.number} />
              </h3>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnersTrust;
