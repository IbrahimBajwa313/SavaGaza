import Image from "next/image";

const Reviews = () => {
  return (
    <section className="bg-blue-50 dark:bg-gray-900 py-16 px-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 lg:p-10">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
            What are your reviews for the{" "}
            <span className="text-green-600">Save Gaza Campaign</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Reviews Section */}
            <div className="w-full md:w-1/2">
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
                  className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 mb-6"
                >
                  <div className="flex items-center mb-3">
                    <Image
                      className="w-10 h-10 rounded-full object-cover"
                      src={review.imgSrc}
                      alt="profile picture"
                      width={40}
                      height={40}
                    />
                    <div className="ml-4">
                      <h3 className="text-md font-semibold text-gray-900 dark:text-gray-100">
                        {review.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {review.testimonial}
                  </p>
                </div>
              ))}
            </div>

            {/* Review Submission Form Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-xl">
                <h3 className="text-3xl font-bold text-black dark:text-gray-100 mb-6 text-center">
                  Share Your Remarks
                </h3>
                <form>
                  {/* Name and Profession Fields Combined */}
                  <div className="mb-6 flex gap-6  flex-col   md:flex-row">
                    <div className="w-full md:w-1/2">
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-500 focus:outline-none"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <input
                        type="email"
                        id="Email"
                        className="w-full p-3 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-500 focus:outline-none"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>

                  {/* Testimonial Field */}
                  <div className="mb-6">
                    <textarea
                      id="testimonial"
                      className="w-full p-4 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-500 focus:outline-none"
                      rows="4"
                      placeholder="Share your experience..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 dark:bg-gray-600 text-white p-4 rounded-lg hover:bg-black dark:hover:bg-gray-500 transition duration-300 focus:outline-none"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
