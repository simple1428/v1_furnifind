import { motion } from "framer-motion";
import { fadeInUp } from "@/Pages/Home/Utils/MotionVariants";

const ReviewSection = () => {
  // Array of reviews
  const reviews = [
    {
      id: 1,
      text: "Amazing quality furniture and fantastic service! Highly recommend to anyone looking to upgrade their home decor.",
      author: "Jane Doe",
    },
    {
      id: 2,
      text: "I absolutely love my new sofa! It's super comfortable and the design is perfect for my living room. Great customer service too.",
      author: "John Smith",
    },
    {
      id: 3,
      text: "The furniture exceeded my expectations! Timely delivery and easy assembly. Definitely worth the price.",
      author: "Emily Johnson",
    },
  ];

  return (
    <motion.section
      variants={fadeInUp}
      className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center mb-8 md:mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {/* Map through the reviews array to display each review */}
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <p className="text-gray-600 italic mb-6">{review.text}</p>
              <p className="font-semibold text-gray-800 text-right">
                - {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ReviewSection;
