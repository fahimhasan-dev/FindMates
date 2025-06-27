import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import Loading from "../components/Loading";
import PostCard from "../components/PostCard";
import AboutOurWebSite from "../components/AboutOurWebSite";
import Services from "../components/Services";
import LogoShowcase from "../components/LogoShowcase";
import TestimonialSlider from "../components/TestimonialSlider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <header>
        <Slider></Slider>
      </header>
      <main>
        <Suspense fallback={<Loading></Loading>}>
          <PostCard></PostCard>
        </Suspense>
        <AboutOurWebSite></AboutOurWebSite>

        <div>
          <LogoShowcase></LogoShowcase>
        </div>
        <TestimonialSlider></TestimonialSlider>
        <Services></Services>
      </main>
    </div>
  );
};

export default Home;
