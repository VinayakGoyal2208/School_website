import Hero from "../components/home_page/Hero";
import Cards from "../components/home_page/Cards";
import Homeabout from "../components/home_page/Homeabout";
import Statsection from "../components/home_page/tab_section";
import Testimonial from "../components/home_page/Testimonial";
import Mission from "../components/home_page/schoolMission";
import Endsection from "../components/home_page/end_Section";

export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Homeabout />
      <Statsection />
      <Testimonial />
      <Mission />
      <Endsection />
    </>
  );
}
