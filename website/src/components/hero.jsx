import heroImg from "../assets/Champion-of-the-week.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-270 w-full flex items-center justify-center"
    >
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover pt-20"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Quote */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          “Empowering thousands of students  
          <br className="hidden md:block" />
          towards success.”
        </h1>
      </div>
    </section>
  );
}
