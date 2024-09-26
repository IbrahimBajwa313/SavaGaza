import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <section className='bg-green-600 flex rounded-3xl m-20 p-10 shadow-2xl'>
        <aside className='w-3/6 flex flex-col text-white justify-between p-10 pr-28' >
            <h2 className='font-extrabold text-3xl mb-4'>About Us</h2>
            <p>
                <span className='font-extrabold'>Save Gaza Campaign </span>
                is not just a movement; it’s a beacon of hope for the oppressed, driven by the collective 
                conscience of humanity. We stand resolute in our commitment to justice, guided solely by the principles of compassion 
                and solidarity. We’ve been trying to making a difference since our humble beginnings in November 2023.
            </p>
            <br/>
            <p className='font-extrabold'>
                Help us help the Ghaza's most vulnerable.
            </p>
            <p className='font-extrabold'>
                Please join today.
            </p>
            <button className='w-6/12 p-3 mt-6 bg-red-600 rounded-full font-bold text-2xl transition duration-300 ease-in-out hover:bg-black hover:text-white'>
                Join Now <FontAwesomeIcon className="pl-4" icon={faArrowUpRightFromSquare} />
            </button>
            
        </aside>
        <div className='w-3/6 flex'>Slider</div>
    </section>
  );
}