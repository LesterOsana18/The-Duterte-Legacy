import LandingSection from "./sections/LandingSection";
import BeforePresidency from "./sections/BeforePresidency";
import StatisticsSection1 from "./sections/StatisticsSection1";
import StatisticsSection2 from "./sections/StatisticsSection2";
import StatisticsSection3 from "./sections/StatisticsSection3";
import ICCSection from "./sections/ICCSection";
import CallToAction from "./sections/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/*Contents Section*/}
      <LandingSection />
      <BeforePresidency />
      <StatisticsSection1 />
      <StatisticsSection2 />
      <StatisticsSection3 />
      <ICCSection />
      <CallToAction />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
