import React from "react";
import Link from "next/link";
import Image from 'next/image';

const MediaAboutUs = () => {
  const articles = [
    {
      id: 1,
      image: "/hajj1.jpg", // Replace with your image path
      title: "Join SGC: Become part of the movement and support our campaign",
      source: "Join SGC #join",
      date: "12.05.2024",
      link: "/article1", // Replace with your link
    },
    {
      id: 2,
      image: "/hajj1.jpg", // Replace with your image path
      title: "Donate: Support our cause by making a generous donation #donate",
      source: "Donate #donate",
      date: "26.04.2024",
      link: "/article2", // Replace with your link
    },
    {
      id: 3,
      image: "/hajj1.jpg", // Replace with your image path
      title: "Join SGC: Help us in our projects and initiatives #join",
      source: "Join SGC #join",
      date: "26.03.2024",
      link: "/article3", // Replace with your link
    },
    {
      id: 4,
      image: "/hajj1.jpg", // Replace with your image path
      title: "Donate: Your contribution can make a significant difference #donate",
      source: "Donate #donate",
      date: "17.03.2024",
      link: "/article4", // Replace with your link
    },
  ];

  return (
    <section className="py-12 bg-blue-50 w-full">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
          How You Can Help
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <Image
                src={article.image}
                alt={article.title}
                className="rounded-lg mb-4"
                layout="responsive"
                width={700} // Increased width
                height={400} // Increased height
              />
              <p className="text-left text-gray-600 font-semibold mb-2">
                {article.source}
              </p>
              <h3 className="text-left text-lg font-bold mb-4 text-gray-800">
                {article.title}
              </h3>
              <div className="text-right mt-auto">
                <Link
                  href={article.link}
                  className="inline-block px-4 py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaAboutUs;
