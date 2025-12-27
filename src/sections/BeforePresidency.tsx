const BeforePresidency = () => {
  return (
    <section
      id="before-presidency"
      className="min-h-screen bg-[#0b0b0b] flex items-center"
    >
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
        
        {/* Left: Image */}
        <div className="relative w-full h-full">
          <img
            src="/images/scene-one.png"
            alt="Rodrigo Duterte as Mayor of Davao City"
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
          />
        </div>
        
        {/* Right: Text Content */}
        <div className="flex flex-col justify-center p-6 lg:px-12 text-content">
          <h2 className="text-4xl mb-6 text-white font-bold">
            Before the Presidency
            <span className="block text-xl text-gray-400 mt-2 font-light">
              The Davao Years
            </span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Rodrigo Duterte built his national reputation in Davao City, where he
            served as mayor for over 22 years. He positioned himself as a hardliner
            against crime, militancy, and corruption—often boasting that fear was an
            effective tool of governance.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            In an interview with the BBC, Duterte openly admitted to having shot
            three men while serving as mayor, reinforcing a long-standing image
            of extrajudicial enforcement rather than rule of law.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Human Rights Watch labeled him the
            <span className="italic"> “death squad mayor,” </span>
            estimating that more than 1,000 people were killed in Davao City
            without legal process during his tenure—an early warning of the
            violence that would later scale nationwide.
          </p>

          <div className="mt-6 flex flex-wrap items-center space-x-2">
            <p className="text-xs text-gray-500">Source:</p>

            <a 
              href="https://www.bbc.com/news/world-36659258"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read the Human Rights Watch Report on Duterte"
              className="text-xs text-gray-500 hover:underline transition"
            >  
              BBC Report
            </a>

            <span className="text-xs text-gray-500">|</span>

            <a 
              href="https://www.bbc.com/news/world-asia-38337746"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read the BBC Interview on Duterte"
              className="text-xs text-gray-500 hover:underline transition"
            >
              BBC Interview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforePresidency;