import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function About() {
  return (
    <section className="bg-green-600 flex flex-col lg:flex-row rounded-3xl  md:m-10 lg:m-0 p-6 md:p-10 shadow-2xl">
      <aside className="w-full lg:w-3/6 flex flex-col text-white justify-between p-6 md:p-10 lg:pr-28">
        <h2 className="font-extrabold text-2xl md:text-3xl mb-4">About Us</h2>
        <p className="text-sm md:text-base">
          <span className="font-extrabold">Save Gaza Campaign </span>
          is not just a movement; it’s a beacon of hope for the oppressed, driven by the collective conscience of humanity. We stand resolute in our commitment to justice, guided solely by the principles of compassion and solidarity. We’ve been trying to make a difference since our humble beginnings in November 2023.
        </p>
        <br />
        <p className="font-extrabold text-sm md:text-base">
          Help us help Gaza's most vulnerable.
        </p>
        <p className="font-extrabold text-sm md:text-base">
          Please join today.
        </p>
        <button className="w-full lg:w-6/12 p-3 mt-6 bg-red-600 rounded-full font-bold text-lg md:text-2xl transition duration-300 ease-in-out hover:bg-black hover:text-white">
          Join Now <FontAwesomeIcon className="pl-4" icon={faArrowUpRightFromSquare} />
        </button>
      </aside>
      <div className="w-full lg:w-3/6 mt-6 lg:mt-0 flex justify-center lg:justify-start">
        {/* React Responsive Carousel */}
        <div className="relative w-full max-w-[620px]">
          <Carousel 
            showThumbs={false} 
            showStatus={false} 
            infiniteLoop={true} 
            autoPlay={true} 
            interval={5000}
            className="rounded-lg"
          >
            <div>
              <img src="/about.jpg" alt="Slide 1" className="rounded-lg"/>
            </div>
            <div>
              <img src="/about.jpg" alt="Slide 2" className="rounded-lg"/>
            </div>
            <div>
              <img src="/about.jpg" alt="Slide 3" className="rounded-lg"/>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
