import { motion } from "framer-motion";

const NewsletterSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="py-20 bg-blue-400"
  >
    <motion.div
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      className="max-w-3xl mx-auto px-4 text-center"
    >
      <h2 className="text-4xl font-bold text-white mb-6">Stay in the Loop</h2>
      <p className="text-white/90 mb-8 text-lg">
        Subscribe to our newsletter for exclusive deals and interior design tips
      </p>
      <motion.form
        whileHover={{ scale: 1.02 }}
        className="flex gap-4 max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-4 rounded-full font-semibold transition-colors"
        >
          Subscribe
        </button>
      </motion.form>
    </motion.div>
  </motion.section>
);

export default NewsletterSection;
