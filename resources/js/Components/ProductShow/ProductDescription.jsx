import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProductDescription({ description }) {
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);
  const toggleDescription = () =>
    setDescriptionExpanded(!isDescriptionExpanded);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Product Description</h2>
      <motion.div
        className={`prose max-w-none ${
          !isDescriptionExpanded ? "max-h-64 overflow-hidden" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {description.length > 300 && (
        <button onClick={toggleDescription} className="mt-4 text-blue-500">
          {isDescriptionExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
