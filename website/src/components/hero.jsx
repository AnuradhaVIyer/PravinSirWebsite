import championHero from "../assets/Champion-of-the-week.png"
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black p-8"
    >
      <img
        src={championHero}
        alt="Hero Image"
        className="w-full h-full object-cover"
      />
    </section>
  );
}
