export default function Courses() {
  const courses = [
    {
      title: "DMI – Cloud & DevOps Masterclass (Classroom Program)",
      duration: "20 hours (Offline + Hands-on)",
      price: "Included in DMI Program",
      status: "Live",
      img: "/dmi-course.jpg", // you can replace with your image path
      link: "https://www.youtube.com/playlist?list=PLVOdqXbCs7bX88JeUZmK4fKTq2hJ5VS89", // replace with your official link
    },
    {
      title: "AWS DevOps & CI/CD with AWS CodePipeline for Engineers",
      duration: "15 hours",
      price: "₹409",
      status: "Live",
      img: "	https://img-c.udemycdn.com/course/480x270/5492716_8a93_5.jpg",
      link: "https://www.udemy.com/course/mastering-aws-devops-for-cloud-engineers/?couponCode=CP251118BG1",
    },
    {
      title: "Linux for DevOps, Cloud, and SRE Engineers",
      duration: "5 hours",
      price: "₹399",
      status: "Live",
      img: "	https://img-c.udemycdn.com/course/480x270/5403140_ce56_12.jpg",
      link: "https://www.udemy.com/course/linux-for-cloud-engineers-a-complete-project-based-learning/?couponCode=CP251118BG1",
    },
    {
      title: "AWS Fundamentals with 2 Projects: Cloud for Beginners [2025]",
      duration: "22.5 hours",
      price: "₹399",
      status: "Live",
      img: "	https://img-c.udemycdn.com/course/480x270/4707588_697e_18.jpg",
      link: "https://www.udemy.com/course/aws-fundamentals-amazon-web-services-for-beginners/?couponCode=CP251118BG1",
    },
    {
      title: "Git & GitHub for Absolute Beginners with Project",
      duration: "2.5 hours",
      price: "₹399",
      status: "Live",
      img: "https://img-c.udemycdn.com/course/480x270/5536474_9535_5.jpg",
      link: "https://www.udemy.com/course/git-and-github-for-beginners-start-coding-collaboratively/?couponCode=CP251118BG1",
    },
    {
      title: "AWS Cloud Projects for Data & AI Engineers: 5 Projects",
      duration: "4 hours",
      price: "₹399",
      status: "Live",
      img: "https://img-c.udemycdn.com/course/480x270/6836427_cc7c.jpg",
      link: "https://www.udemy.com/course/aws-cloud-projects-for-data-ai-engineers-5-projects/?couponCode=CP251118BG1",
    },
    {
      title: "DevOps for beginners: Docker, K8s, Cloud, CI/CD & 4 Projects",
      duration: "43.5 hours",
      price: "₹399",
      status: "Live",
      img: "	https://img-c.udemycdn.com/course/480x270/6462549_5d25_4.jpg",
      link: "https://www.udemy.com/course/devops-for-beginners-docker-k8s-cloud-cicd-4-projects/?couponCode=CP251118BG1",
    },
        {
      title: "AWS Cloud Projects for Engineers: 5 Real-World Projects",
      duration: "11.5 hours",
      price: "₹399",
      status: "Live",
      img: "https://img-c.udemycdn.com/course/480x270/6362029_fba1_4.jpg",
      link: "https://www.udemy.com/course/aws-mastery-hands-on-cloud-projects-for-engineers/?couponCode=CP251118BG1",
    },
        {
      title: "[NEW] AWS Certified Cloud Practitioner CLF-C02 for Beginner",
      duration: "32.5 hours",
      price: "₹399",
      status: "Live",
      img: "https://img-c.udemycdn.com/course/480x270/6048441_ce3f_8.jpg",
      link: "https://www.udemy.com/course/aws-certified-cloud-practitioner-clf-c02-aws-certification/?couponCode=CP251118BG1",
    },
        {
      title: "Cloud Computing with AWS for Absolute Beginners",
      duration: "10.2 hours",
      price: "₹399",
      status: "Live",
      img: "	https://img-c.udemycdn.com/course/480x270/6020724_2668_4.jpg",
      link: "https://www.udemy.com/course/aws-cloud-computing-for-absolute-beginners/?couponCode=CP251118BG1",
    },
    
  ];

  return (
    <section
      id="courses"
      className="fade-up pt-12 pb-20 px-6 bg-white scroll-mt-20"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-20">
        Courses
      </h2>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        {courses.map((c, index) => (
       <div
  key={index}
  className="
    bg-white border border-gray-200 p-4 rounded-xl shadow-lg animate-fadeInUp
    hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]
    transition-all duration-500 text-center max-w-sm mx-auto
  "
>
  {/* IMAGE */}
  <div className="w-full h-[180px] overflow-hidden rounded-lg mb-3">
    <img
      src={c.img}
      alt={c.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* TITLE */}
  <h3 className="text-lg font-semibold text-[#0a0f1f] mb-2 text-center h-[50px]">
    {c.title}
  </h3>

  {/* DURATION */}
  <p className="text-gray-600 text-sm">Duration: {c.duration}</p>

  {/* PRICE */}
  <p className="text-yellow-500 font-bold text-sm mt-1">{c.price}</p>

  {/* STATUS BADGE */}
  <span
    className={`
      inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold text-white
      ${c.status === "Live"
        ? "bg-green-600"
        : c.status === "Upcoming"
        ? "bg-blue-600"
        : "bg-gray-600"
      }
    `}
  >
    {c.status}
  </span>

  {/* ENROLL BUTTON */}
  <a
    href={c.link}
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-4 w-full block bg-yellow-400 text-black py-2 rounded-md
      font-semibold hover:bg-yellow-500 transition text-sm
    "
  >
    Enroll Now →
  </a>
</div>


        ))}
      </div>
    </section>
  );
}