import CartItem from '@/components/CartItem'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { MyContext } from './_app'
 
const Wishlist = () => {

    // Using Context API to use app functions in this file
    const { cart, addToCart, oneMinusQty, clearCart, subTotal } = MyContext()


    return (
        <div className='md:my-20 w-full '>
            <Wrapper>

                {/* Shoong Cart Heading */}
                <div className='text-center mt-8 md:mt-0 max-w-[800px] mx-auto'>
                    <div className='text-[28px] md:text-[42px] font-bold mb-5 font-semibold leading-tight'>
                        Wishlist
                    </div>
                </div>


                {/* Cart Content */}

                {Object.keys(cart).length !== 0 && <div className='flex flex-col lg:flex-row gap-12 py10'>
                    {/* Cart Item Start */}
                    <div className='flex-[2] '>
                        <div className='text-lg font-bold '>Cart Items</div>

                        <CartItem />
                    </div>
                    {/* Cart Item end */}

                    

                </div>}
                {/* Cart Content End*/}



                {/*When Cart is empty  */}
                {Object.keys(cart).length === 0 && <div className='flex flex-[2] flex-col items-center  pb-[50px] md:mt-12' >
                    <Image
                        priority={false}
                        src="/empty-cart.jpg"
                        height={300}
                        alt="Empty Cart Image"
                        width={300}
                        className='w-[300px] md:w-[400px]'
                    ></Image>

                    <span className='font-bold text-xl'>Your Cart is empty</span>
                    <span className='text-center mt-4'>
                        Looks Like have'nt added anything in your cart
                        <br /> Go ahead and explore more Categories
                    </span>

                    {/* Add To Continue Shoping Start */}
                    <Link href="/">
                        <button className='w-60  text-lg bg-black text-white border  rounded-full py-3 mt-8 font-md transition-transform active:scale-95 flex items-center justify-center hover:opacity-75 mb-3'>Continue Shoping</button>
                    </Link>
                    {/* Add To Continue Shoping */}
                </div>}

            </Wrapper>
        </div>
    )
}

export default Wishlist
