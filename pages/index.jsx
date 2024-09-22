import { useState, useEffect } from 'react';
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import { useInView } from 'react-hook-inview';
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [ref, inView] = useInView();

  // Simulate data fetching
  useEffect(() => {
    // Replace with your actual data fetching logic
    const fetchProducts = async () => {
      try {
        // Simulating a network request
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Example data with unique IDs
        const fetchedProducts = [
          { id: 1, name: 'Product 1' },
          { id: 2, name: 'Product 2' },
          { id: 3, name: 'Product 3' }
        ];

        setProducts(fetchedProducts); // Update with actual data
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className='overflow-x-hidden w-screen z-40'>
      <HeroBanner />
      <Wrapper>
        <div className='text-center mb-12 max-w-[800px] mt-[50px] md:mt-[80px] mx-auto'>
          <div className='font-bold text-[28px] md:text-[34px] mb-2 leading-tight'>
                Save Gaza About 
          </div>
          <div className='flex text-[20px] mb-4'>
           </div>
        </div>

        
      </Wrapper>
    </main>
  );
}
