const SocialShare = () => {
  const shareLinks = [
    { platform: "Facebook", icon: "fb-icon", color: "blue" },
    { platform: "Twitter", icon: "twitter-icon", color: "sky" },
    { platform: "Pinterest", icon: "pinterest-icon", color: "red" },
    { platform: "Email", icon: "email-icon", color: "gray" },
  ];

  return (
    <div className="mt-8 flex items-center gap-4">
      <span className="text-sm text-gray-500">Share this product:</span>
      <div className="flex gap-2">
        {shareLinks.map((link, idx) => (
          <button
            key={idx}
            className={`p-2 rounded-full bg-${link.color}-100 hover:bg-${link.color}-200 transition-colors`}
          >
            {/* Add your social media icons here */}
            {link.platform}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;
