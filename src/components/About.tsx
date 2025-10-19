import { motion } from "motion/react";
// @ts-ignore: external figma asset module resolution
const wobbleLogo = "/assets/wobble.png"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={wobbleLogo} 
              alt="WOBBLE" 
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl mb-6 bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
              What is WOBBLE?
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                WOBBLE is more than just another memecoin – it's a movement! Born from the chaotic beauty of the crypto world, WOBBLE represents the fun, unpredictable, and exciting side of blockchain technology.
              </p>
              <p>
                Our adorable blue blob mascot embodies the spirit of our community: playful, resilient, and always ready to bounce back stronger. With WOBBLE, you're not just investing in a token – you're joining a family of wobblers who believe in the power of memes, community, and having a blast while doing it!
              </p>
              <p>
                Built on Solana for lightning-fast transactions and minimal fees, WOBBLE is here to make crypto fun again. No complicated roadmaps, no empty promises – just pure, unadulterated wobble energy! 🎉
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border-2 border-cyan-200">
                <div className="text-3xl mb-2">🔒</div>
                <div className="text-sm text-gray-600">Liquidity Locked</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border-2 border-orange-200">
                <div className="text-3xl mb-2">✅</div>
                <div className="text-sm text-gray-600">Contract Verified</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-cyan-50 p-6 rounded-2xl border-2 border-yellow-200">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-sm text-gray-600">Community Driven</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-2xl border-2 border-blue-200">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-sm text-gray-600">Fast & Cheap</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}