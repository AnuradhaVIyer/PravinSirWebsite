import { useEffect } from "react";

export default function Books() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-show");
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));
  }, []);

  const books = [
    {
      title: "Ultimate Git and GitHub for Modern Software Development",
      desc: "Master Git, GitHub workflows, version control, and real-world team collaboration techniques.",
      signature: "P. Mishra",
      author: "Pravin Mishra",
      img: "https://m.media-amazon.com/images/I/71EAHWURLTL._AC_UF1000,1000_QL80_.jpg",
      rating: "4.9",
      reviews: "14",
      link: "https://www.amazon.in/dp/8197223831",
    },
    {
      title: "Cloud Computing with AWS",
      desc: "A beginner-friendly guide to mastering AWS fundamentals and preparing for AWS Cloud Practitioner.",
      signature: "P. Mishra",
      author: "Pravin Mishra",
      img: "https://m.media-amazon.com/images/I/61ozZNaPh+L._AC_UF1000,1000_QL80_.jpg",
      rating: "4.3",
      reviews: "21",
      link: "https://www.amazon.in/dp/1484291719",
    },
      {
    title: "Mastering DevOps",
    desc: "Your Path to Success: A Practical Guide to Building, Deploying, and Scaling Applications with AWS DevOps.",
    signature: "P. Mishra",
    author: "Pravin Mishra",
    img: "https://m.media-amazon.com/images/I/71Q43c34UzL._SY466_.jpg", // change if needed
    rating: "5",
    reviews: "1",
    link: "https://www.amazon.in/dp/9356484880", // add correct link
  },
  ];

  return (
    <section id="book" className="relative pt-12 pb-20 px-6 bg-white text-[#0a0f1f] scroll-mt-24 fade-section">
      {/* FLOATING GLOW EFFECT */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-yellow-300 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>

      {/* FIXED CENTERED TITLE */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mx-auto w-fit text-black mb-20 relative">
        Featured Books
        <span className="block w-full h-1 bg-gradient-to-r from-yellow-400 to-blue-500 mt-2 animate-[underline_1.5s_ease-in-out_infinite]"></span>
      </h2>

      <div className="max-w-7xl mx-auto space-y-32">
        {books.map((book, index) => (
          <div
            key={index}
            className={`fade-section grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0
                ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                : ""
            }`}
          >
            {/* BOOK IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-[280px] md:w-[340px] rounded-2xl p-4 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                           hover:shadow-[0_15px_60px_rgba(0,0,0,0.25)] transition-all duration-500 book-tilt">
                <img src={book.img} alt={book.title} className="rounded-xl w-full object-cover" />
              </div>
            </div>

            {/* BOOK DETAILS */}
            <div className="md:text-left text-center fade-section">

              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black">{book.title}</h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">{book.desc}</p>

              <p className="italic text-gray-500 mb-2 text-lg">“{book.signature}”</p>

              <p className="font-semibold text-gray-800 mb-4 text-xl">— {book.author}</p>

              {/* FIXED STAR RATING */}
              <div className="flex items-center gap-2 mb-6 justify-center md:justify-start direction-ltr">
                <span className="text-xl text-yellow-500">⭐</span>
                <span className="text-black font-bold">{book.rating}</span>
                <span className="text-gray-600 text-sm">({book.reviews} reviews)</span>
              </div>

              {/* CTA BUTTON */}
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold shadow-md hover:shadow-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
              >
                Get Your Copy →
              </a>

            </div>
          </div>
        ))}
      </div>

      {/* Tilt + fade CSS */}
      <style>{`
        .fade-section { opacity: 0; transform: translateY(40px); transition: 1s ease-out; }
        .fade-show { opacity: 1 !important; transform: translateY(0) !important; }
        .direction-ltr { direction: ltr !important; }

        @keyframes underline {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
      `}</style>
    </section>
  );
}