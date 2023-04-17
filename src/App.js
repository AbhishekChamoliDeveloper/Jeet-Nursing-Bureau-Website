import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import ContactUs from "./components/ContactUs";
import AddressMap from "./components/AddressMap";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <ContactUs />
      <AddressMap />
      <Footer />
    </div>
  );
};

export default App;
