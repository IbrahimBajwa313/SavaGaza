import { useState, useEffect } from "react";
import HeroBanner from "@/components/HeroBanner";
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
          <div className="font-bold text-[28px] md:text-[34px] mb-2 leading-tight">
            Save Gaza About
          </div>  

        </div>
            <HowYouCanHelp />
      </Wrapper>
    </main>
  );
}
