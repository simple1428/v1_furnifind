import { motion } from "framer-motion";
import { fadeInUp } from "../Utils/MotionVariants";
const CategorySection = ({ categories }) => {
  return (
    <motion.section
      variants={fadeInUp}
      className="py-12 bg-gray-100 max-w-7xl mx-auto"
    >
      {/* Categories Grid */}
      <motion.div className="p-4 flex gap-8 justify-center group">
        {categories.slice(0, 5).map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#FCD34D",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            className="flex flex-col items-center w-40 h-40 justify-center bg-white rounded-lg cursor-pointer group-hover:opacity-50 hover:!opacity-100"
          >
            {/* {item.icon} */}
            <span className="text-gray-500 font-semibold text-center">
              {item.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
export default CategorySection;
