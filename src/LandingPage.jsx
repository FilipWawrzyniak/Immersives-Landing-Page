import React from "react";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";

function LandingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const audios = ref.current.querySelectorAll("audio");
      audios.forEach(audio => {
        if (audio.readyState >= 3) {
          audio.play().catch(e => console.warn("Playback failed", e));
        }
      });
    }
  }, [isInView]);

  return (
    <div>
      {/* Hero Background Section */}
      <motion.section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/A_digital_painting_for_a_dark_fantasy_RPG_game_lan.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">Enter the Shadows of Viremoor</h1>
          <p className="text-lg md:text-xl mb-6">A dark fantasy RPG where your choices carve fate.</p>
          <div className="space-x-4">
            <a href="#newsletter" className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full text-sm">Join the Hunt</a>
            <a href="https://yourgamewebsite.com" className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-full text-sm" target="_blank" rel="noopener noreferrer">Go to Game</a>
          </div>
        </div>
      </motion.section>

      {/* Dialogue Section */}
      <motion.section
        ref={ref}
        className="bg-gray-900 text-white py-16 px-6 md:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Voices of the Forsaken</h2>
        <div className="space-y-10 max-w-4xl mx-auto">
          <motion.div className="flex items-start gap-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <img src="/avatar-1.jpg" alt="Character 1" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <p className="font-bold text-red-400">Tharion</p>
              <p className="text-lg italic">"The air reeks of sulfur… something ancient stirs beneath these stones."</p>
              <audio src="/tharion-1.mp3" preload="auto"></audio>
            </div>
          </motion.div>
          <motion.div className="flex items-start gap-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <img src="/avatar-2.jpg" alt="Character 2" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <p className="font-bold text-blue-400">Elyra</p>
              <p className="text-lg italic">"Perhaps the gods have not abandoned us after all… or perhaps they simply watch and laugh."</p>
              <audio src="/elyra-1.mp3" preload="auto"></audio>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section id="newsletter" className="bg-black text-white py-16 px-6 md:px-20 text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Dark Watch</h2>
        <p className="mb-6 text-lg">Subscribe to receive exclusive lore drops, updates, and dark secrets.</p>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="email" placeholder="Enter your email" className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none" required />
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">Subscribe</button>
        </form>
      </motion.section>
    </div>
  );
}

export default LandingPage;
