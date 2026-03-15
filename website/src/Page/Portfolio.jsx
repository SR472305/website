import React, { useState, useEffect } from "react";
import project1 from "../image/project1.jpg";
import project2 from "../image/project2.jpg";
import project3 from "../image/project3.jpg";
import project4 from "../image/project4.jpg";
import project5 from "../image/project5.jpg";
import project6 from "../image/project6.jpg";

import member1 from "../image/member1.jpg";
import member2 from "../image/member2.jpg";
import member3 from "../image/member3.jpg";
import member4 from "../image/member4.jpg";

const Portfolio = () => {
    const projects = [
        { title: "E-Commerce Website", image: project1, link: "#" },
        { title: "Mobile App Design", image: project2, link: "#" },
        { title: "Cloud Management Tool", image: project3, link: "#" },
        { title: "Portfolio Website", image: project4, link: "#" },
        { title: "SaaS Dashboard", image: project5, link: "#" },
        { title: "Corporate Website", image: project6, link: "#" },
    ];

    const testimonials = [
        { name: "Alice Johnson", role: "UI/UX Designer", image: member1, feedback: "Great collaboration, very professional!" },
        { name: "Mark Wilson", role: "Frontend Developer", image: member2, feedback: "Delivered quality code on time." },
        { name: "Sophia Lee", role: "Project Manager", image: member3, feedback: "Excellent communication and teamwork." },
        { name: "John Smith", role: "Backend Developer", image: member4, feedback: "High quality backend solutions." },
    ];

    // Responsive: detect items per slide based on window width
    const [itemsPerSlide, setItemsPerSlide] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerSlide(1); // mobile
            } else {
                setItemsPerSlide(2); // tablet & desktop
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 4s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev + itemsPerSlide >= testimonials.length ? 0 : prev + itemsPerSlide
            );
        }, 4000);
        return () => clearInterval(interval);
    }, [itemsPerSlide, testimonials.length]);

    // Total slides for dots
    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

    // Handle dot click
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex * itemsPerSlide);
    };

    // Get visible testimonials
    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerSlide);

    return (
        <section className="bg-[#08142c] text-white py-20" id="portfolio">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Our <span className="text-blue-400">Portfolio</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Check out some of our recent projects that we delivered with excellence.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            className="group relative overflow-hidden rounded-xl shadow-lg"
                        >
                            {/* Image Always Visible */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay with Text on Desktop */}
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500 md:flex">
                                <h3 className="text-white text-xl font-semibold text-center px-4">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Glass Effect Text on Mobile */}
                            <div className="absolute bottom-2 left-2 right-2 md:hidden text-white text-center text-sm font-semibold px-2 py-1 
                      bg-gray-400 bg-opacity-20 backdrop-blur-sm rounded">
                                {project.title}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Testimonial Carousel */}
                <div className="text-center mb-12 px-4 py-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        What <span className="text-blue-400">Our Team Says</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Feedback from our talented members and collaborators.
                    </p>

                    {/* Carousel Testimonials */}
                    <div className="flex gap-6 overflow-hidden w-full max-w-4xl mx-auto">
                        {visibleTestimonials.map((t, idx) => (
                            <div key={idx} className="bg-[#0f2147] rounded-xl p-6 flex-1 flex flex-col items-center text-center shadow-lg min-w-[250px]">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-blue-400"
                                />
                                <h3 className="text-xl font-semibold">{t.name}</h3>
                                <p className="text-blue-400 text-sm mb-2">{t.role}</p>
                                <p className="text-gray-300">{t.feedback}</p>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center mt-6 gap-3">
                        {Array.from({ length: totalSlides }).map((_, idx) => (
                            <span
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${idx === Math.floor(currentIndex / itemsPerSlide)
                                    ? "bg-blue-400"
                                    : "bg-gray-500"
                                    }`}
                            ></span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;