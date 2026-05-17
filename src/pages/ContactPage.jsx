import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="pt-10">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
