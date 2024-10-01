import { useState, useEffect } from "react";
import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
import LeadersSlider from "@/components/LeadersSlider";
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
     
        
        <About />
        <HowYouCanHelp />
        <LeadersSlider/>
      {/* </Wrapper> */}
    </main>
  );
}
