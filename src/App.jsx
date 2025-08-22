import {
  Preloader,
  Header,
  HeroSlider,
  CallToAction,
  Services,
  About,
  Portfolio,
  Team,
  News,
  Testimonials,
  Contact,
  Footer,
  Modal
} from './components';
import './App.css';

function App() {
  return (
    <>
      <Preloader />
      <div className="page w-full m-0 p-0">
        <Header />
        <HeroSlider />
        <CallToAction />
        <Services />
        <About />
        <Portfolio />
        <Team />
        <News />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <Modal />
      <div className="snackbars" id="form-output-global"></div>
    </>
  );
}

export default App;
