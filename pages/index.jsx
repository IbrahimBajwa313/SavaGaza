import { useState, useEffect } from "react";
import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
import FAQs from "@/components/FAQs"; 
import LeadersSlider from "@/components/LeadersSlider";
import Wrapper from "@/components/Wrapper";
import { useInView } from "react-hook-inview";
import { motion } from "framer-motion";
import HowYouCanHelp from "@/components/HowYouCanHelp";
import Reviews from "@/components/Reviews";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [ref, inView] = useInView();

  return (
    <main className="overflow-x-hidden w-screen z-20">
      {/* <Wrapper> */}
      <HeroBanner />
      <About />
      <HowYouCanHelp />
      <LeadersSlider />
      <Reviews />
      <FAQs />
      {/* </Wrapper> */}
    </main>
  );
}
