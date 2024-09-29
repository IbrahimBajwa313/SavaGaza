import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const LeadersSlider = () => {
  const leaders = [
    {
      name: "Maria B.",
      title: "Fashion Designer",
      image: "/protest1.jpg", // Replace with your image path
    },
    {
      name: "Humaira Tayyaba",
      title: "Founder Save Gaza Campaign",
      image: "/protest1.jpg", // Replace with your image path
    },
    {
      name: "Mahera Sajid",
      title: "Founding Member (IT Professional)",
      image: "/protest1.jpg", // Replace with your image path
    },
    {
      name: "Mushtaq Khan",
      title: "Ex-Member of Senate",
      image: "/protest1.jpg", // Replace with your image path
    },
    {
      name: "Another Leader",
      title: "Another Title",
      image: "/protest1.jpg", // Replace with your image path
    },
  ];

  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('flag2.jpg')" }} // Correct the background image path
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

      <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
          Leaders Driving Save Gaza Movement
        </h2>
        <p className="text-xl sm:text-2xl font-semibold text-white mb-8">
          No one is free until Palestine is free!
        </p>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          centeredSlides={false}
          slidesPerView={4} // Show four slides at once
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {leaders.map((leader, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 h-80 flex flex-col items-center justify-center"> {/* Increased height */}
                <Image
                  src={leader.image}
                  alt={leader.name}
                  className="rounded-full mb-4"
                  width={150}
                  height={150}
                />
                <h3 className="text-xl font-bold text-green-600">{leader.name}</h3>
                <p className="text-gray-800">{leader.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LeadersSlider;
