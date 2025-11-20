import { BookOpen, Cloud, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Courses on DevOps',
    description: 'Hands-on, industry-ready courses designed to upskill learners in Cloud, DevOps, automation, and modern infrastructure practices.',
    features: [
      'AWS, Azure & GCP Certifications',
      'Kubernetes & Docker Mastery',
      'CI/CD Pipeline Implementation',
      'Infrastructure as Code (Terraform)',
      'Real-world Projects & Labs'
    ],
    color: 'blue',
    highlight: 'Most Popular'
  },
  {
    icon: BookOpen,
    title: 'Books on DevOps',
    description: 'Deeply insightful books focused on DevOps concepts, real-world implementations, and career guidance for aspiring cloud engineers.',
    features: [
      'Comprehensive DevOps Guides',
      'Real-world Case Studies',
      'Career Development Strategies',
      'Best Practices & Patterns',
      'Interview Preparation'
    ],
    color: 'yellow',
    highlight: 'Best Seller'
  },
  {
    icon: Users,
    title: 'Consulting Services',
    description: 'Helping brands and businesses with Cloud solution architecture, DevOps adoption, infrastructure modernization, and strategic technology consulting.',
    features: [
      'Cloud Migration Strategy',
      'DevOps Transformation',
      'Architecture Design & Review',
      'Cost Optimization',
      'Team Training & Mentorship'
    ],
    color: 'blue',
    highlight: 'Enterprise Grade'
  }
];

export default function Services() {
  return (
    <section id="services" className="fade-up py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">Services</span>
            <div className="h-1 bg-gradient-to-r from-yellow-400 to-blue-500 mt-2 rounded-full"></div>
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black">
            What I Offer
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to accelerate your cloud and DevOps transformation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              yellow: 'from-yellow-400 to-yellow-500',
              blue: 'from-blue-500 to-blue-600'
            };

            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${service.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                    {service.highlight}
                  </span>
                </div>

                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${colorClasses[service.color]} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                        <div className={`w-2 h-2 rounded-full ${service.color === 'yellow' ? 'bg-yellow-400' : 'bg-blue-500'}`}></div>
                      </div>
                      <span className="ml-3 text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="group/btn w-full flex items-center justify-center space-x-2 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-200">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}