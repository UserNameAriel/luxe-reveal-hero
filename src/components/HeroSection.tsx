import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const blurValue = useTransform(scrollYProgress, [0, 0.15], [0, 20]);
  const floorTextY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Blur on Scroll */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center"
        style={{
          filter: useTransform(blurValue, (v) => `blur(${v}px)`),
        }}
      >
        {/* Desktop: zoomed out with black side panels, Mobile/Tablet: cover */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:bg-contain"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content Layer with Blur on Scroll */}
      <motion.div
        className="relative z-10 h-full w-full"
        style={{
          filter: useTransform(blurValue, (v) => `blur(${v}px)`),
        }}
      >
        {/* Main Content Grid */}
        <div className="flex h-full w-full flex-col justify-between px-6 py-12 md:px-12 lg:px-20">
          {/* Upper Content */}
          <div className="flex flex-1 items-center justify-between">
            {/* Left Side - Logo & Subtitle */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col space-y-2"
            >
              <h2 className="text-2xl font-light tracking-[0.3em] text-white md:text-3xl lg:text-4xl">
                Ariel web
              </h2>
              <p className="text-sm font-light tracking-[0.2em] text-white/70 md:text-base">
                take your website to the next level
              </p>
            </motion.div>

            {/* Right Side - Hebrew Headline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="max-w-xs text-right md:max-w-md lg:max-w-lg"
            >
              <h1 
                className="text-2xl font-light leading-relaxed tracking-wide text-white md:text-3xl lg:text-4xl xl:text-5xl"
                dir="rtl"
              >
                בניית אתרי תדמית ברמה שעוד לא ראית
              </h1>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floor Text - DISCOVER ME (Does NOT blur, translates up on scroll) */}
      <motion.div
        className="pointer-events-auto absolute bottom-0 left-0 right-0 z-20 flex items-end justify-center pb-8"
        style={{
          y: floorTextY,
          height: "50vh",
        }}
      >
        <RevealText
          text="DISCOVER  ME"
          textColor="text-white/90"
          overlayColor="text-white"
          fontSize="text-[8vw] md:text-[10vw] lg:text-[12vw]"
          letterDelay={0.06}
          overlayDelay={0.04}
          overlayDuration={0.5}
          springDuration={500}
          letterImages={[
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400",
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
            "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400",
            "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400"
          ]}
        />
      </motion.div>
    </section>
  );
}
