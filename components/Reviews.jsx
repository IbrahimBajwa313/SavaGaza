 // components/Reviews.jsx
 import Image from "next/image";

 const Reviews = () => {
   return (
     <section className="bg-blue-50 dark:bg-gray-900 py-16 px-6">
       <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 lg:p-12">
           <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8 tracking-wide">
             What are your reviews for the Save Gaza Campaign
           </h2>
 
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
                   className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 mb-8"
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
                       <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                         {review.name}
                       </h3>
                       <p className="text-gray-600 dark:text-gray-400">{review.role}</p>
                     </div>
                   </div>
                   <p className="text-gray-700 dark:text-gray-300">{review.testimonial}</p>
                 </div>
               ))}
             </div>
 
             {/* Review Submission Form Section */}
             <div className="w-full md:w-1/2 flex justify-center items-center">
               <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                 <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
                   Share Your Experience
                 </h3>
                 <form>
                   {/* Name Field */}
                   <div className="mb-6">
                     <label
                       className="block text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2"
                       htmlFor="name"
                     >
                       Your Name
                     </label>
                     <input
                       type="text"
                       id="name"
                       className="w-full p-4 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-300"
                       placeholder="Enter your full name"
                       required
                     />
                   </div>
 
                   {/* Testimonial Field */}
                   <div className="mb-6">
                     <label
                       className="block text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2"
                       htmlFor="testimonial"
                     >
                       Your Testimonial
                     </label>
                     <textarea
                       id="testimonial"
                       className="w-full p-4 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-300"
                       rows="4"
                       placeholder="Share your experience..."
                       required
                     ></textarea>
                   </div>
 
                   {/* Submit Button */}
                   <button
                     type="submit"
                     className="w-full bg-gray-700 dark:bg-gray-600 text-white p-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-300"
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
 