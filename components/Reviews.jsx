// components/Reviews.jsx
import Image from "next/image";

const Reviews = () => {
  return (
    <section className="bg-gray-100 py-12 dark:bg-gray-900 max-h-screen relative overflow-hidden">
      <div className="absolute inset-0 ">
        <Image
          src="/DharnaBG.jpg" // Path to your background image
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
        />
      </div>
      <div className="container mx-auto px-6 relative  z-10">
        <h2 className="text-5xl font-extrabold text-center text-gray-100 dark:text-white mb-8 tracking-wide drop-shadow-lg">
          What are your reviews for the Save Gaza Campaign
        </h2>

        <div className="flex justify-between gap-8 ml-24">
          {/* Reviews Section */}
          <div className="w-1/2 mt-10">
            {[
              {
                name: "Sarah Connor",
                role: "CEO, Skynet Inc.",
                testimonial:
                  "“I’ve had an amazing experience working with this team. Their solutions have been perfect for our company’s needs!”",
                imgSrc: "/flag2.jpg",
              },
              {
                name: "John Doe",
                role: "CTO, Cyberdyne Systems",
                testimonial:
                  "“Their attention to detail and customer satisfaction is exceptional. I highly recommend them!”",
                imgSrc: "/flag2.jpg",
              },
              {
                name: "Jane Smith",
                role: "Product Manager, Tech Corp",
                testimonial:
                  "“Working with this team has exceeded my expectations. Their designs and execution are top-notch.”",
                imgSrc: "/flag2.jpg",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 relative overflow-hidden transition-transform transform hover:scale-105 mb-8"
              >
                <div className="flex items-center mb-4">
                  <Image
                    className="w-12 h-12 rounded-full object-cover"
                    src={review.imgSrc}
                    alt="profile picture"
                    width={50}
                    height={50}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {review.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {review.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {review.testimonial}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-20 rounded-lg"></div>
              </div>
            ))}
          </div>

        {/* Review Submission Form Section */}
<div className="w-1/2 flex justify-cen ter items-center">
  <div className="bg-white bg-opacity-70 p-8 ml-20 rounded-lg shadow-2xl relative overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
    {/* Adding a subtle gradient overlay to match reviews */}
    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-20 rounded-lg"></div>
    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center relative z-10">
      Share Your Experience
    </h3>
    <form className="relative z-10">
      {/* Name Field */}
      <div className="mb-6">
        <label
          className="block text-xl font-semibold text-gray-900 dark:text-gray-300 mb-2"
          htmlFor="name"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-4 rounded-lg border-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          placeholder="Enter your full name"
          required
        />
      </div>

      {/* Testimonial Field */}
      <div className="mb-6">
        <label
          className="block text-xl font-semibold text-gray-900 dark:text-gray-300 mb-2"
          htmlFor="testimonial"
        >
          Your Testimonial
        </label>
        <textarea
          id="testimonial"
          className="w-full p-4 rounded-lg border-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          rows="4"
          placeholder="Share your experience..."
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white p-4 rounded-lg hover:from-red-700 hover:to-yellow-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        Submit Review
      </button>
    </form>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;