// pages/Home.jsx
import Hero from "./Hero";
import Experience from "./Experience";
import AboutUs from "./AboutUs";
import India from "./India";
import International from "./International";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      {/* <section id="experience">
        <Experience />
      </section> */}
      {/* <section id="destinations">
        <Destinations />
      </section> */}
      <section id="india">
        <India />
      </section>
      <section id="international">
        <International />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <section id="about">
        <AboutUs />
      </section>
    </>
  );
};

export default Home;
