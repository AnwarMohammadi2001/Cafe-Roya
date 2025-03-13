import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { CUSTOMERS } from "./deta";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../utils/Testimonials.css";

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null); // Ref for pagination container

  return (
    <div className="max-w-[60%] relative group py-10 mx-auto">
      <div className="text-center  space-y-3 mb-7">
        <h1 className="text-xl font-Poppins font-semibold">TESTIMONIALS</h1>
        <h2 className="text-4xl font-Satisfy text-gray-600">
          What Are They Saying About Us
        </h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
          el: paginationRef.current, // Set the pagination container
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Update pagination and navigation elements
          swiper.params.pagination.el = paginationRef.current;
          swiper.pagination.init();
          swiper.pagination.update();

          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{ delay: 5000 }}
        spaceBetween={100}
        slidesPerView={1}
        grabCursor={true}
        className="overflow-visible cursor-pointer relative"
      >
        {CUSTOMERS.length > 0 ? (
          CUSTOMERS.map((customer, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center mt-7 space-y-3 items-center">
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-[200px] rounded-full h-[200px]"
                />
                <h3 className="text-lg font-bold">{customer.name}</h3>
                <p className="text-base">{customer.agend}</p>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      <FaStar size={20} />
                    </span>
                  ))}
                </div>
                <p className="text-center text-base">{customer.message}</p>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="w-full flex items-center justify-center text-gray-500">
            تصاویری در دسترس نیست
          </div>
        )}
      </Swiper>
      {/* Pagination container with ref */}
      <div
        ref={paginationRef}
        className="custom-pagination flex justify-center mt-5 space-x-2"
      ></div>
    </div>
  );
};

export default Testimonials;
