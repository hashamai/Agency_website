import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Problems from "./components/Problems.jsx";
import Services from "./components/Services.jsx";
import Different from "./components/Different.jsx";
import Method from "./components/Method.jsx";
import Audit from "./components/Audit.jsx";
import Offers from "./components/Offers.jsx";
import Hvac from "./components/Hvac.jsx";
import Expect from "./components/Expect.jsx";
import Close from "./components/Close.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#problems">Skip to content</a>
      <Nav />
      <Hero />
      <Marquee />
      <main>
        <Problems />
        <Services />
        <Different />
        <Method />
        <Audit />
        <Offers />
        <Hvac />
        <Expect />
        <Close />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
