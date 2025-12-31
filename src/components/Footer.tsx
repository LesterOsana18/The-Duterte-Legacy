const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-8 md:pt-12 pb-0 border-t border-gray-700">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-8 md:gap-12 px-4 md:px-6">
        
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">
            About the Site
          </h3>
          <p className="text-sm leading-relaxed max-w-sm">
            A platform built to remember a dark period in Philippine history.
            This site was created to raise awareness, call for justice, and give
            voice to those who suffered in silence during Duterte's administration.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">
            Quick Links
          </h3>
          <ul className="text-sm space-y-3">
            <li>
              <a
                href="#statistics-section-one"
                className="hover:text-white transition"
              >
                Statistics
              </a>
            </li>
            <li>
              <a
                href="#call-to-action-section"
                className="hover:text-white transition"
              >
                Call to Action
              </a>
            </li>
            <li>
              <a
                href="https://www.amnesty.org/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Amnesty International
              </a>
            </li>
            <li>
              <a
                href="https://www.icc-cpi.int/philippines/duterte"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                The Duterte Case (ICC)
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Credits */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">
            Credits
          </h3>
          <ul className="text-sm space-y-3">
            <li>
              <a
                href="https://www.pbs.org/wgbh/frontline/article/fighting-for-compassion-in-the-philippines-brutal-drug-war/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                FRONTLINE
              </a>
            </li>
            <li>
              <a
                href="https://www.bbc.com/news/world-36659258"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                BBC News
              </a>
            </li>
            <li>
              <a
                href="https://www.aljazeera.com/news/2025/3/11/arrested-on-icc-warrant-what-was-dutertes-war-on-drugs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Al Jazeera
              </a>
            </li>
            <li>
              <a
                href="https://www.hrw.org/news/2017/03/02/killing-squads-inside-philippines-war-drugs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Human Rights Watch
              </a>
            </li>
            <li>
              <a
                href="https://eastasiaforum.org/2025/04/10/the-philippines-confronts-dutertes-authoritarian-legacy-at-the-hague/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                East Asia Forum
              </a>
            </li>
            <li>
              <a
                href="https://www.flaticon.com/free-icons/skull"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Skull icons by Freepik (Flaticon)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 md:mt-12 mb-0 text-center text-sm text-gray-600 border-t border-gray-700 pt-4 md:pt-6 pb-4 md:pb-6 px-4 md:px-6">
        <p>
          This site is for educational purposes only. All information presented
          is publicly available.
        </p>
        <p>All images and data are credited to their respective sources.</p>
      </div>
    </footer>
  );
};

export default Footer;