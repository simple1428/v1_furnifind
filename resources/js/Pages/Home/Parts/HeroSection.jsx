import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    customPaging: (i) => (
      <div className="w-3 h-3 mt-5   rounded-full -mt-5 bg-white/50 hover:bg-white/80 transition-all duration-300"></div>
    ),
  };
  const carouselData = [
    {
      title: "Modern Minimalist",
      subtitle: "Furniture",
      description:
        "Transform your space with our curated collection of contemporary furniture. Discover pieces that blend style, comfort, and functionality.",
      image:
        "https://i.pinimg.com/736x/39/de/ad/39dead639c3d999940ce825228e17e3a.jpg",
    },
    {
      title: "Elegant Living",
      subtitle: "Collection",
      description:
        "Experience luxury and comfort with our elegant living room collection. Perfect for modern homes.",
      image:
        "https://i.pinimg.com/736x/39/de/ad/39dead639c3d999940ce825228e17e3a.jpg",
    },
    {
      title: "Designer",
      subtitle: "Workspace",
      description:
        "Create your perfect workspace with our designer office furniture collection.",
      image:
        "https://i.pinimg.com/736x/39/de/ad/39dead639c3d999940ce825228e17e3a.jpg",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative px-3 mt-20"
    >
      <Slider {...settings} className="hero-slider">
        {carouselData.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index }}
            className="outline-none"
          >
            <div key={index} className="outline-none">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[400px] md:h-96 rounded-2xl bg-blue-400 pt-5 rounded-b-none">
                <div className="group rounded-b-full hover:shadow-md pb-1">
                  <h1 className="text-3xl md:text-5xl font-bold text-center text-white leading-tight mb-5">
                    {slide.title}
                    <br />
                    <span className="text-yellow-300 border-b-2 border-yellow-300">
                      {slide.subtitle}
                    </span>
                  </h1>
                </div>
                <div className="flex justify-center mt-2">
                  <div className="w-full md:w-1/2 flex justify-center flex-col items-center">
                    <p className="text-base md:text-lg my-3 text-white text-center">
                      {slide.description}
                    </p>
                    <Link className="inline-block w-40 bg-yellow-400 rounded-2xl px-4 py-2 font-semibold">
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto bg-blue-400 pb-5 rounded-b-2xl relative drop-shadow-lg">
                <div className="group relative flex justify-center items-center">
                  {" "}
                  {/* Pindahkan class group ke sini */}
                  <img
                    src={`${asset}product/2.png`}
                    alt=""
                    className="w-full md:w-[700px] drop-shadow-xl relative z-10 transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Efek cahaya */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32
      bg-gradient-radial from-yellow-300/70 via-yellow-300/30 to-transparent
      opacity-0 group-hover:opacity-100 transition-all duration-300
      blur-2xl -z-10"
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.section>
  );
};

export default HeroSection;
