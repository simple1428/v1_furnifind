const FAQSection = () => {
  const faqs = [
    {
      question: "What's the delivery time?",
      answer: "Standard delivery takes 2-3 business days within the city.",
    },
    {
      question: "Do you offer assembly service?",
      answer:
        "Yes, we offer professional assembly service for an additional fee.",
    },
    // ... more FAQs
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group bg-white rounded-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer">
              <h3 className="font-medium">{faq.question}</h3>
              <span className="transform group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <p className="px-4 pb-4 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
