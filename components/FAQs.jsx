import { useState, useEffect } from "react";
import Image from "next/image";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [animationClass, setAnimationClass] = useState("");

  const faqs = [
    {
      question: "How can I get involved with the Save Gaza Campaign?",
      answer: "There are various ways to participate, including attending protests and events organized by the campaign, spreading awareness on social media, volunteering your time and skills, and donating to support the cause.",
    },
    {
      question: "What has the Save Gaza Campaign achieved so far?",
      answer: "The campaign has achieved significant milestones, including raising awareness through protests and media outreach and building partnerships with other organizations to amplify its impact.",
    },
    {
      question: "Is the Save Gaza Campaign affiliated with any political/religious group?",
      answer: "No, the Save Gaza Campaign is a non-partisan and non-denominational movement. It welcomes participation from individuals of all backgrounds who share a commitment to justice and solidarity with the Palestinian people.",
    },
    {
      question: "How can I stay updated on the latest developments and activities of the Save Gaza Campaign?",
      answer: "You can follow the campaign on social media platforms such as Twitter, Facebook, and Instagram, visit our website for news and updates, and subscribe to our newsletter for regular information and announcements.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null) {
      setAnimationClass("transition-all duration-300 ease-in-out transform scale-100 opacity-100");
    }
  }, [activeIndex]);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-gray-50"
      style={{
        backgroundImage: "url('/bgGaza.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 bg-opacity-30 rounded-lg shadow-lg">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-gray-800 font-serif">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-400 pb-4">
                  <button
                    className="w-full text-left py-4 flex justify-between items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 rounded-md px-4 shadow-md"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    <span className="text-xl text-white">{activeIndex === index ? "-" : "+"}</span>
                  </button>
                  {activeIndex === index && (
                    <div
                      className={`py-2 px-2 mt-2 bg-gray-100 rounded-lg shadow-inner transition-all duration-300 ease-in-out ${animationClass}`}
                    >
                      <p className="text-gray-700 text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/faq.webp"
                alt="Support Image"
                layout="responsive"
                width={500}
                height={300}
                className="rounded-lg transition-transform transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
