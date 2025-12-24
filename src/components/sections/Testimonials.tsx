"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="section overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs uppercase tracking-widest font-medium mb-4"
            style={{ color: '#8b7355', letterSpacing: '0.3em' }}
          >
            Depoimentos
          </p>
          <h2
            className="font-serif text-2xl md:text-3xl lg:text-4xl"
            style={{ color: '#ffffff' }}
          >
            O que nossas clientes dizem
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_85%] lg:flex-[0_0_70%] px-3 md:px-4"
                >
                  <motion.div
                    className="p-6 md:p-10 lg:p-12 text-center"
                    style={{ backgroundColor: '#242424' }}
                    initial={{ opacity: 0.5, scale: 0.95 }}
                    animate={{
                      opacity: selectedIndex === index ? 1 : 0.5,
                      scale: selectedIndex === index ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Quote Icon */}
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-4 md:mb-6 opacity-50"
                      style={{ color: '#8b7355' }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    {/* Quote Text */}
                    <p
                      className="font-serif text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8"
                      style={{ color: '#ffffff' }}
                    >
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="text-center">
                      <p
                        className="font-medium text-sm md:text-base"
                        style={{ color: '#8b7355' }}
                      >
                        {testimonial.author}
                      </p>
                      <p
                        className="text-xs md:text-sm mt-1"
                        style={{ color: '#737373' }}
                      >
                        {testimonial.location} • {testimonial.event}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-10">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: selectedIndex === index ? '#8b7355' : '#4a4a4a',
                width: selectedIndex === index ? '24px' : '8px',
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
