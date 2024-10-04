import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 flex flex-col lg:flex-row p-8 md:p-12 shadow-2xl h-screen relative">
      <aside className="w-full lg:w-3/6 flex flex-col text-white justify-between p-8 md:p-12 lg:pr-28">
        <h2 className="font-extrabold text-4xl md:text-5xl mb-6 text-shadow">
          About Us
        </h2>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mb-6 backdrop-blur-md">
          <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">
            <span className="font-extrabold text-xl text-red-600">
              Save Gaza Campaign
            </span>{" "}
            is a movement of hope and resilience, uniting voices for justice and
            compassion. Since our inception in November 2023, we strive to
            uplift the oppressed and foster solidarity among communities,
            ensuring that every individual feels valued and heard.
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mb-6 backdrop-blur-md">
          <p className="font-extrabold text-base md:text-lg mb-4 text-gray-200">
            Join the{" "}
            <span className="font-extrabold text-xl text-red-600">
              Save Gaza Campaign
            </span>{" "}
            on every platform to amplify our collective voice for justice and
            solidarity with Gaza. Your engagement is crucial in raising
            awareness and mobilizing support for those in need.
          </p>
        </div>
        <Link
          href="https://linktr.ee/savegazacampaign?fbclid=IwY2xjawFqa9tleHRuA2FlbQIxMAABHVzcYXjzzh5sZXXBzItdSO39QkkR2E6yl52iDv8gI5faFzCNF8E2VJ0vFg_aem_-x3l-zLS038P999qjvZNXA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full lg:w-6/12 p-4 mt-6 bg-red-600 rounded-full font-bold text-lg md:text-2xl transition duration-300 ease-in-out hover:bg-black hover:text-white shadow-lg transform hover:scale-105">
            Join Now{" "}
            <FontAwesomeIcon className="pl-4" icon={faArrowUpRightFromSquare} />
          </button>
        </Link>
      </aside>
      <div
        className="w-full lg:w-3/6 mt-6 lg:mt-20 flex justify-center lg:justify-start"
        style={{ transform: "translateY(50px)" }}
      >
        {/* React Responsive Carousel */}
        <div className="relative w-full max-w-[620px]">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            className="rounded-lg shadow-lg"
          >
            <div>
              <img
                src="/protest1.jpg"
                alt="Slide 1"
                className="rounded-lg object-cover h-96"
              />
            </div>
            <div>
              <img
                src="/protest2.jpg"
                alt="Slide 2"
                className="rounded-lg object-cover h-96"
              />
            </div>
            <div>
              <img
                src="/protest3.jpg"
                alt="Slide 3"
                className="rounded-lg object-cover h-96"
              />
            </div>

            <div>
              <img
                src="/protest4.jpg"
                alt="Slide 3"
                className="rounded-lg object-cover h-96"
              />
            </div>
          </Carousel>
          {/* Overlay Text */}
          <div className="absolute inset-x-0 bottom-16 flex items-center justify-center text-center">
            <h3 className="text-white text-2xl md:text-3xl font-semibold bg-black bg-opacity-30 rounded-lg p-4">
              Join Us in Making a Difference!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
