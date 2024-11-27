const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      comment: "Great quality product!",
      date: "2024-01-15",
    },
  ];

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Write a Review
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">{review.user}</h3>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-${
                      i < review.rating ? "yellow" : "gray"
                    }-400`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
