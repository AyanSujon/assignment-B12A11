
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Container from "../../components/shared/Container";

// Brand Colors
const brandPrimary = "#0b99ce";
const brandSecondary = "#fe3885";

// Hero slides data
const slides = [
    {
        title: "Discover Local Clubs",
        subtitle: "Find communities that match your passion and interests.",
        buttonText: "Join a Club",
        img: "https://www.seniorhelpers.ca/site/assets/files/507317/friendly_conversation_among_seniors_in_a_cozy_setting.480x0.webp",
    },
    {
        title: "Create Your Own Club",
        subtitle: "Start a club, host events, and grow your community.",
        buttonText: "Create a Club",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    },
    {
        title: "Join Exciting Events",
        subtitle: "Participate in club activities and connect with members.",
        buttonText: "Join Events",
        img: "https://www.eventbrite.com/blog/wp-content/uploads/2023/05/image-38-768x512.avif",
    },
];

const Hero = () => {
    return (
        <section className="w-full max-h-[430px] relative bg-gray-100 flex items-center justify-center overflow-hidden">
            <Container>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="w-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 md:py-32 gap-8">
                                {/* Text Section */}
                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className="flex-1"
                                >
                                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-700 mb-6">
                                        {slide.subtitle}
                                    </p>
                                    <button
                                        className="btn text-white transition-all duration-300"
                                        style={{ backgroundColor: brandPrimary }}
                                        onMouseEnter={(e) => (e.target.style.backgroundColor = brandSecondary)}
                                        onMouseLeave={(e) => (e.target.style.backgroundColor = brandPrimary)}
                                    >
                                        {slide.buttonText}
                                    </button>
                                </motion.div>

                                {/* Image Section */}
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className="flex-1"
                                >
                                    <img
                                        src={slide.img}
                                        alt={slide.title}
                                        className="rounded-xl shadow-xl w-full object-cover max-h-[400px]"
                                    />
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default Hero;
