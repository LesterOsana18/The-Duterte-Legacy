const CallToAction = () => {
  return (
    <section
      id="call-to-action-section"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-black text-white"
    >
      {/* Left Panel: Image */}
      <div className="relative flex items-center justify-center h-72 md:h-full">
        <img
          src="/images/action.png"
          alt="Symbolic representation of justice and unity"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>

      {/* Right Panel: Content */}
      <div
        className="flex flex-col justify-center items-start px-6 sm:px-8 md:px-12 py-8 sm:py-12"
      >
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4">
          One Step Closer to Justice
        </h2>

        {/* Introductory Message */}
        <p className="text-sm sm:text-base leading-relaxed text-gray-300 mb-6">
          For years under his regime, critics were met with intimidation, threats, and the systematic loss of freedom. Thousands paid the ultimate price.
          Today marks a rare turning point—proof that power does not erase accountability. This moment matters not only for EJK victims and their families, but for the nation’s conscience and its history. The road has been long, but justice has moved closer.
        </p>

        {/* Current Significance */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          This Is What Justice Means Today
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
          Justice is no longer defined solely by courtrooms or verdicts. It is recognition—of lives lost, of families silenced, and of violence carried out in the name of the state. 
          The ICC affirms that even delayed justice remains possible, and that accountability does not disappear with time.
        </p>

        {/* Call to Action */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          What Can We Do?
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
          Justice is not sustained by institutions alone—it depends on people. Stay informed. Remain vigilant. Speak with responsibility and purpose.
          Remember the victims beyond the headlines. Reflect on the leaders we choose, the values we tolerate, and the future we shape together. History only repeats itself when it is allowed to be forgotten.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-row items-center justify-start gap-4">
          <a
            href="#statistics-section-three"
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-red-700 hover:bg-red-600 text-white text-xs sm:text-sm font-semibold transition"
          >
            Learn the Facts
          </a>
          <a
            href="https://www.amnesty.org/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-gray-50 hover:bg-gray-300 text-gray-900 text-xs sm:text-sm font-semibold transition"
            aria-label="Support Human Rights Efforts"
          >
            Support Human Rights
          </a>
        </div>

        {/* Closing Message */}
        <div className="mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
            "When tyranny becomes law, rebellion becomes duty." – Thomas Jefferson
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;