const LandingSection = () => {
  const handleScroll = () => {
    document
      .getElementById("before-presidency")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cover.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-oswald">
          A Presidency of Graves:
          <span className="block font-normal mt-4 font-oswald">
            The Violent Legacy of Rodrigo Duterte
          </span>
        </h1>

        <p className="mt-6 text-sm md:text-base text-gray-300 font-montserrat">
          “If I make it to the presidential palace, I will do just what I did as mayor. 
          You drug pushers, holdup men, and do-nothings, you better get out because I’ll kill you.”
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

      <a 
        href="https://www.hrw.org/news/2017/09/07/philippine-president-rodrigo-dutertes-war-drugs"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute mb-4 mr-4 bottom-4 right-4 text-sm md:text-base text-gray-300 font-montserrat hover:underline transition"
        style={{ zIndex: 20 }}
      >
        Human Rights Watch
      </a>
    </section>
  );
};

export default LandingSection;
