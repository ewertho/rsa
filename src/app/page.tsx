// pages/index.tsx
import { CardsTop } from "@/components/cardsTop/CardsTop";
import Contato from "@/components/contato/Contato";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Plans } from "@/components/plans/Plans";

// import Section1 from "@/components/section1/Section1";
// import Section2 from "@/components/section2/Section2";
import "animate.css";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 relative">
      <Header />
      <CardsTop />
      <Plans />

      <Contato />
      <Footer />
    </div>
  );
};

export default Home;
