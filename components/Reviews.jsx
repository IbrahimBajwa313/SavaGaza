import { useState, useEffect } from "react";

// Array of random background colors
const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#F39C12", "#8E44AD", "#1ABC9C",
  "#E74C3C", "#2ECC71", "#3498DB", "#9B59B6", "#E67E22", "#34495E"
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [testimonial, setTestimonial] = useState("");

  useEffect(() => {
    // Fetch reviews from MongoDB
    const fetchReviews = async () => {
      const res = await fetch("/api/reviews");
      const data = await res.json();

      // Assign a random color to each review on initial load
      const reviewsWithColors = data.map(review => ({
        ...review,
        color: getRandomColor()
      }));

      setReviews(reviewsWithColors);
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the API to submit the review
    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, testimonial }),
    });

    if (response.ok) {
      const newReview = await response.json(); // Get the new review from the response
      newReview.color = getRandomColor(); // Assign a random color to the new review

      alert("Review submitted successfully");
      setReviews((prevReviews) => [newReview, ...prevReviews].slice(0, 3)); // Add the new review and keep only the latest 3
      setName("");
      setEmail("");
      setTestimonial("");
    } else {
      alert("Failed to submit review");
    }
  };

  return (
    <section className=" py-16 ">
      <div className="">
        <div className="p-12">
          <h1 className="text-5xl text-center font-extrabold mb-10">
            Share Your Reviews
          </h1>

          <div className="flex flex-row justify-center items-center gap-12">
            {/* Reviews Section */}
            <div className="w-[50%]">
              {reviews.slice(-3).map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-5 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02] mb-6"
                >
                  <div className="flex items-center mb-3">
                    {/* Avatar with First Letter of Name and Random Color */}
                    <div
                      className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-bold"
                      style={{ backgroundColor: review.color }} // Use the assigned color
                    >
                      {review.name ? review.name[0].toUpperCase() : ""}

                    </div>
                    <div className="ml-4">
                      <h3 className="text-md font-semibold text-gray-900 ">
                        {review.name}
                      </h3>
                      <p className="text-gray-600  text-sm">
                        {review.email}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700  text-sm">
                    {review.testimonial}
                  </p>
                </div>
              ))}
            </div>

            {/* Review Submission Form Section */}
            <div className="w-[50%] flex justify-center items-center ">
              <div className=" bg-gray-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-black mb-6 text-center">
                  Share Your Remarks
                </h3>
                <form onSubmit={handleSubmit}>
                  {/* Name and Email Fields */}
                  <div className="mb-6 flex gap-6 flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-500 focus:outline-none"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-500 focus:outline-none"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                      value={testimonial}
                      onChange={(e) => setTestimonial(e.target.value)}
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
