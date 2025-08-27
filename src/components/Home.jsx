import React from 'react';
import {
  HeroSlider,
  CallToAction,
  Services,
  About,
  Portfolio,
  Team,
  News,
  Testimonials,
  Contact
} from './index';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <CallToAction />
      <Services />
      <About />
      <Portfolio />
      <Team />
      <News />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;