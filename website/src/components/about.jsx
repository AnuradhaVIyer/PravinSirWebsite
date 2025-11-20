import React from "react";
import { Briefcase, BookOpen, PenTool, Presentation } from "lucide-react";
import signature from "../assets/signature.png";
const About = () => {
  return (
    <section className="w-full py-20 px-4 font-sans bg-white">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Pravin Mishra
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Pravin is a Cloud, DevOps, Data, and AI Consultant helping companies modernize
          their systems, build scalable cloud architectures, and train thousands of
          professionals globally. His aim is to make cloud adoption simple, practical,
          and accessible to everyone.
        </p>

        {/* Signature Placeholder */}
        <div className="my-12 flex justify-center">
          <img
            src={signature}
            alt="signature"
            className="w-64 opacity-80"
          />
        </div>

        {/* Four Columns - Roles */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-12">

          {/* Consultant */}
          <div className="flex flex-col items-center">
            <Briefcase size={40} className="text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Cloud Consultant
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed px-3">
              Delivering modern cloud solutions on AWS and Azure. Helping companies scale,
              secure, and optimize their infrastructure.
            </p>
          </div>

          {/* Trainer */}
          <div className="flex flex-col items-center">
            <BookOpen size={40} className="text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Educator
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed px-3">
              Training 1000+ professionals in AWS, DevOps, Kubernetes, CI/CD pipelines, and cloud automation.
            </p>
          </div>

          {/* Author */}
          <div className="flex flex-col items-center">
            <PenTool size={40} className="text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Content Creator
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed px-3">
              Creating high-impact cloud & DevOps content consumed by thousands of learners worldwide.
            </p>
          </div>

          {/* Founder */}
          <div className="flex flex-col items-center">
            <Presentation size={40} className="text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Founder
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed px-3">
              Founder of <strong>The CloudAdvisory</strong>, transforming cloud adoption through consulting and training.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
