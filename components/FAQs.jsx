import { useState, useEffect } from "react";
import Image from "next/image"; // Import the Image component from Next.js

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
    <section className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-green-600">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="w-full text-left py-4 flex justify-between items-center bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-green-600">{faq.question}</span>
                  <span className="text-xl text-green-600">{activeIndex === index ? "-" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <div className={`py-2 px-2 bg-gray-50 rounded-lg ${animationClass}`}>
                    <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 ml-16"> {/* Added margin-left here */}
          <Image
            src="/faq.webp" // Ensure this path is correct
            alt="Descriptive Alt Text"
            layout="responsive" // Ensures the image scales responsively
            width={500} // Specify width for optimization
            height={300} // Specify height for optimization
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
