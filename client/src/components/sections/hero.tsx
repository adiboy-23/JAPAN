import { motion } from "framer-motion";
import { useState } from "react";

export function Hero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={(e) => {
            const video = e.target as HTMLVideoElement;
            video.playbackRate = 0.70;
          }}
          onError={(e) => {
            console.error('Video loading error:', e);
            setVideoError(true);
          }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source 
            src="/240841.mp4"
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      )}

      {videoError && (
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#8B7355]/40 to-[#8B7355]/20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}

      <div className="absolute inset-0 bg-black/20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative h-full flex flex-col justify-center items-center text-white text-center px-4"
      >
        <h1 className="text-7xl md:text-9xl font-serif mb-6 tracking-wider">
          Japan
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
          Where tradition meets serenity
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById("culture")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-8 px-8 py-3 bg-[#8B7355]/80 hover:bg-[#8B7355] text-white rounded-md transition-colors"
        >
          Discover
        </motion.button>
      </motion.div>
    </section>
  );
}