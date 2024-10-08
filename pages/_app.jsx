import ContactAndSubscribe from '@/components/ContactAndSubscribe'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link'
import '@/styles/globals.css'
import Head from 'next/head'
import { useState, useEffect, createContext, useContext,oneMinusQty } from 'react'
import Headroom from 'react-headroom'
import Chatbot from '@/components/Chatbot';

export const productInfo = createContext();

// using Context api to use functions in other files
export function MyContext() {
  return useContext(productInfo)  
}

// App Function
export default function App({ Component, pageProps }) {


  const [cart, setCart] = useState({})

  // Page will remain same after reload
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
    }
    catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])

  const [subTotal, setSubTotal] = useState(0)

   

  return (
    <>
    <Link
        href="https://twitter.com"
        className="fixed bottom-4 right-1 rounded-full bg-white/[0.25] text-green-500 duration-200 hover:scale-110 cursor-pointer"
    >
             <div
  className="fixed bottom-0 right-4 z-[9999] cursor-pointer bg-[#0073b1] text-white p-3 w-[200px] text-center rounded-t-lg"
  onClick={() => setVisible(!visible)}
>
  Chat Now
</div>


        <FaWhatsapp size={50} />
    </Link>
    
    <Head />
    <Headroom>
        <Header />
    </Headroom>

     
        <Component />
  
    <Footer />
    
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
    />
</>

  )
}
