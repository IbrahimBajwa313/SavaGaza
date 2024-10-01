import CartItem from '@/components/CartItem'
import Wrapper from '@/components/Wrapper'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'

const Checkout = () => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") { // Check if it's running on the client side
      const subTotalValue = localStorage.getItem("SubTotal");
      if (subTotalValue) {
        setSubtotal(subTotalValue);
      }
    }
  }, []);

  return (
    <Wrapper>

      <div className='container  mx-auto mb-20'>
        <h1 className='font-bold my-8 text-center text-3xl'>Checkout</h1>
        <h2 className='font-semibold mb-4 text-xl'>Delivery Details</h2>
        <div className='mx-auto'>

          <div className="w-full gap-3 lg:flex">
            <div className='w-full my-2 '>
              <label htmlFor="FirstName" className="leading-7 text-sm text-gray-600">First Name</label>
              <input type="text" id="FirstName" placeholder='First Name*' name="FirstName" className="w-full bg-white rounded border border-gray-300 focus:border-gray-200   focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <div className='w-full my-2 '>
              <label htmlFor="LastName" className="leading-7 text-sm text-gray-600">Last Name</label>
              <input type="text" id="LastName" name="LastName" placeholder='Last Name*' className="w-full bg-white rounded border border-gray-300 focus:border-gray-200    focus:ring-2 focus:ring-gray-200  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

          </div>
          <div className="w-full  gap-3 lg:flex">
            <div className='my-2 w-full'>
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" placeholder='Email*' className="w-full bg-white rounded border border-gray-300 focus:border-gray-200    focus:ring-2 focus:ring-gray-200  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <div className='my-2 w-full'>
              <label htmlFor="PhoneNumber" className="leading-7 text-sm text-gray-600">Phone Number</label>
              <input type="text" id="PhoneNumber" name="PhoneNumber" placeholder='Phone Number*' className="w-full bg-white rounded border border-gray-300 focus:border-gray-200  focus:ring-2 focus:ring-gray-200  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>

          <div className=' mb-8 '>
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea name="address" id="address" cols="30" placeholder='Start Typing Address*' rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-gray-200    focus:ring-2 focus:ring-gray-200  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
            <span className=' text-sm text-gray-700 border-b border-gray-700'>Type Address Manually</span>
          </div>

          <h2 className='font-semibold mb-4 text-xl'>In Your Bag </h2>
          <CartItem/>
          {/* <div className='flex justify-between'> */}

          <div className='uppercase shadow-lg  p-4 rounded-lg text-md md:text-lg font-medium text-black'>
            Subtotal : {subtotal}/. Rs
          </div>

          <Link href={"#"}>
            <button className='w-full my-4 text-lg bg-black text-white border  rounded-full py-4 font-md transition-transform active:scale-95 flex items-center justify-center hover:opacity-75 '>Checkout</button>
          </Link>
        </div>

      </div>
    </Wrapper>
  )
}

export default Checkout