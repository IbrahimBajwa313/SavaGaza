import { useState, useEffect } from "react";
import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
<<<<<<< HEAD
import AsNow from "@/components/AsNow";
=======
import LeadersSlider from "@/components/LeadersSlider";
>>>>>>> 3fd8dd6a06f47421cec5e7ff9f4d53e068e9e7d3
import Wrapper from "@/components/Wrapper";
import { useInView } from "react-hook-inview";
import { motion } from "framer-motion";
import HowYouCanHelp from "@/components/HowYouCanHelp";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [ref, inView] = useInView();

  return (
    <main className="overflow-x-hidden w-screen z-20">
      <HeroBanner />
      <Wrapper>
        <div className="text-center mb-12 max-w-[800px] mt-[50px] md:mt-[80px] mx-auto">
          {/* <div className="font-bold text-[28px] md:text-[34px] mb-2 leading-tight">
            Save Gaza About
          </div> */}
        </div>
        <About />
        <HowYouCanHelp />
        <LeadersSlider/>
      </Wrapper>
<<<<<<< HEAD
      <About />
      <AsNow />
=======
>>>>>>> 3fd8dd6a06f47421cec5e7ff9f4d53e068e9e7d3
    </main>
  );
}
