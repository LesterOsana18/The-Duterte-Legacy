const LandingSection = () => {
  const handleScroll = () => {
    document
      .getElementById("statistics")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cover.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          A Presidency of Graves:
          <span className="block font-normal mt-2">
            The Violent Legacy of Rodrigo Roa Duterte
          </span>
        </h1>

        <p className="mt-6 text-sm md:text-base text-gray-300 italic">
          “If I make it to the presidential palace I will do just what I did as
          mayor… I’ll kill you.”
        </p>

        <button
          onClick={handleScroll}
          className="mt-10 px-8 py-3 border border-white text-white
                     rounded-full hover:bg-white hover:text-black
                     transition"
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default LandingSection;
