const ProductFeatures = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Quality Guarantee",
      description: "100% authentic materials",
    },
    { icon: "🚚", title: "Free Shipping", description: "On orders over $500" },
    { icon: "↩️", title: "Easy Returns", description: "30-day return policy" },
    {
      icon: "🔧",
      title: "Installation",
      description: "Professional installation available",
    },
  ];

  return (
    <div className="mt-16 bg-gray-50 rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Why Choose Our Product
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="text-center">
            <span className="text-3xl mb-4 block">{feature.icon}</span>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;
