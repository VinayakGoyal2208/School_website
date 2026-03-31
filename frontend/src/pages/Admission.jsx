import Hero from "../components/Admission/ad_hero"
import Intro from "../components/Admission/intro";
import Basics from "../components/Admission/basics";
import Academics from "../components/Admission/academics";
import WhyCoed from "../components/Admission/whyCoed";
import Outside from "../components/Admission/outside";
import Contact from "../components/Admission/contact";

export default function adHero() {
  return (
    <>
    <Hero/>
    <Intro/>
    <Basics/>
    <Academics/>
    <WhyCoed/>
    <Outside/>
    <Contact/>  
    </>
  );
}
