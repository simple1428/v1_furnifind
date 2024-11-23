// resources/js/Pages/Home/Index.jsx
import React from "react";
import { Link } from "@inertiajs/react";
import AppLayout from "../../Layouts/AppLayout";
import { IoCart } from "react-icons/io5";
import PrimaryButton from "../../Components/PrimaryButton";
import Slider from "react-slick";
// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = ({ products, categories }) => {
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
      <div className="w-3 h-3 mx-20  rounded-full -mt-5 bg-white/50 hover:bg-white/80 transition-all duration-300"></div>
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
    <AppLayout categories={categories}>
      {/* Hero Section */}
      <section className="relative px-3">
        <Slider {...settings} className="hero-slider">
          {carouselData.map((slide, index) => (
            <div key={index} className="outline-none">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[400px] md:h-96 rounded-2xl bg-blue-400 pt-5 rounded-b-none">
                <h1 className="text-3xl md:text-5xl font-bold text-center text-white leading-tight mb-5">
                  {slide.title}
                  <br />
                  <span className="text-yellow-300">{slide.subtitle}</span>
                </h1>
                <div className="flex flex-col md:flex-row justify-between mt-2">
                  <div className="w-full md:w-1/2"></div>
                  <div className="w-full md:w-1/2">
                    <p className="text-base md:text-lg my-3 text-white">
                      {slide.description}
                    </p>
                    <Link className="inline-block bg-yellow-400 rounded-2xl px-4 py-2 font-semibold">
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
              {/* Banner Image Container */}
              <div className="max-w-7xl mx-auto flex justify-between gap-4 mb-12">
                <div className="w-full md:w-[60%] bg-blue-400 h-48 md:h-64 rounded-b-2xl relative drop-shadow-lg">
                  <img
                    src={`${asset}product/2.png`}
                    alt=""
                    className="w-full md:w-[700px] absolute -top-20 left-5 drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Banner 2 - Responsive Adjustments */}
        <div className="max-w-7xl ml-12 px-2 sm:px-4 lg:px-4 -mt-16 md:-mt-[calc(15rem+64px)]">
          <div className="w-full md:w-[40%] ml-auto bg-yellow-300 h-auto md:h-60 rounded-b-2xl flex flex-col md:flex-row p-5 gap-4 my-4">
            <div className="flex flex-col justify-between flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-yellow-700">
                Wooden Chair 50% OFF
              </h1>
              <Link className="text-center bg-white rounded-2xl px-4 py-2 font-semibold cursor-pointer mt-4 md:mt-0">
                Explore More
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="https://i.pinimg.com/236x/3a/2e/12/3a2e126bc197af3cf54e386d2d5505f7.jpg"
                alt="Wooden Chair"
                className="object-cover h-48 md:h-full w-full rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}

      <section className="py-12 bg-gray-100 max-w-7xl mx-auto">
        <div className="p-4 flex gap-8 justify-center group">
          {/* Chair */}
          <div className="flex flex-col items-center w-40 h-40 justify-center bg-white rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:bg-yellow-400 hover:shadow-xl group-hover:opacity-50 hover:!opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 mb-2 transition-colors duration-300 group-hover:text-gray-400 group-hover:opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12v6m6 6H6m12 0h0-12m6-12V6m0 0L9.343 8.657M12 6l2.657 2.657m0 0L18 12M6 12l3.343-3.343"
              />
            </svg>
            <span className="text-gray-500 font-semibold transition-colors duration-300">
              Chairs
            </span>
          </div>
          {/* Sofa */}
          <div className="flex flex-col items-center w-40 h-40 justify-center bg-white rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:bg-yellow-400 hover:shadow-xl group-hover:opacity-50 hover:!opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 mb-2 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m-7 0v6m0-6v-6m-7 0h14"
              />
            </svg>
            <span className="text-gray-500 font-semibold transition-colors duration-300">
              Sofa
            </span>
          </div>
          {/* Cabinet */}
          <div className="flex flex-col items-center w-40 h-40 justify-center bg-white rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:bg-yellow-400 hover:shadow-xl group-hover:opacity-50 hover:!opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 mb-2 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 3h12m0 0v18H6V3zm3 0v18m6-18v18"
              />
            </svg>
            <span className="text-gray-500 font-semibold transition-colors duration-300">
              Cabinet
            </span>
          </div>
          {/* Wardrobe */}
          <div className="flex flex-col items-center w-40 h-40 justify-center bg-white rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:bg-yellow-400 hover:shadow-xl group-hover:opacity-50 hover:!opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 mb-2 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7h18M3 7V3h18v4M3 7v14h18V7M7 7v14m10-14v14"
              />
            </svg>
            <span className="text-gray-500 font-semibold transition-colors duration-300">
              Wardrobe
            </span>
          </div>
          {/* Armchair */}
          <div className="flex flex-col items-center w-40 h-40 justify-center bg-white rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:bg-yellow-400 hover:shadow-xl group-hover:opacity-50 hover:!opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 mb-2 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16M4 16v4h16v-4M4 8V4h16v4"
              />
            </svg>
            <span className="text-gray-500 font-semibold transition-colors duration-300">
              Armchair
            </span>
          </div>
        </div>
      </section>

      {/* Latest Arrivals Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Latest Arrivals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Discover our newest collection of modern furniture pieces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {products.slice(1, 7).map((product, i) => (
              <div
                key={i}
                className={`group ${i === 0 || i === 4 ? "md:col-span-2" : ""}`}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-[500px] flex flex-col">
                  <div className="relative overflow-hidden h-[300px]">
                    {" "}
                    {/* Tinggi gambar ditambah */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />{" "}
                    {/* Gradient overlay */}
                    <img
                      src={
                        "https://i.pinimg.com/236x/a5/34/10/a534100a2b472074b7277efd31f5b955.jpg"
                      }
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out"
                    />
                    {/* Quick view button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <button className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-gray-800 font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Quick View
                      </button>
                    </div>
                    {/* Discount badge */}
                    {product.discount && (
                      <div className="absolute top-4 left-4 z-20">
                        <div className="bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                          <span className="text-lg">-{product.discount}%</span>
                          <span className="text-xs uppercase">OFF</span>
                        </div>
                      </div>
                    )}
                    {/* Wishlist button */}
                    <button className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-yellow-400 hover:text-white transition-all duration-300 transform opacity-0 group-hover:opacity-100 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                          New Arrival
                        </span>
                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                          In Stock
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        Premium quality furniture piece perfect for modern homes
                        and offices.
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-blue-600">
                          ${product.price}
                        </p>
                        {product.oldPrice && (
                          <p className="text-gray-400 line-through text-sm">
                            ${product.oldPrice}
                          </p>
                        )}
                      </div>
                      <button className="bg-blue-600 hover:bg-yellow-400 text-white px-5 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                        <IoCart className="w-5 h-5" />
                        <span className="font-medium">Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center mb-8 md:mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {/* Sample Review */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-600 italic mb-6">
                "Amazing quality furniture and fantastic service! Highly
                recommend to anyone looking to upgrade their home decor."
              </p>
              <p className="font-semibold text-gray-800 text-right">
                - Jane Doe
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-600 italic mb-6">
                "Affordable prices for high-quality products. The customer
                support was also very helpful!"
              </p>
              <p className="font-semibold text-gray-800 text-right">
                - John Smith
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-600 italic mb-6">
                "Fast shipping and great products. Definitely will shop here
                again!"
              </p>
              <p className="font-semibold text-gray-800 text-right">
                - Sarah Lee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-blue-400  ">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay in the Loop
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Subscribe to our newsletter for exclusive deals and interior design
            tips
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
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
          </form>
        </div>
      </section>
    </AppLayout>
  );
};

export default Home;
