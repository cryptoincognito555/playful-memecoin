import { motion } from "motion/react";
import { Sparkles, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Pure Fun",
    description: "No complicated tokenomics, just pure memecoin energy and good vibes.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Built by the community, for the community. Everyone's invited to wobble!",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Liquidity locked, contract renounced. We're here for the long wobble.",
  },
  {
    icon: Zap,
    title: "Fast & Cheap",
    description: "Lightning-fast transactions with minimal fees. Wobble without worry!",
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
            Why WOBBLE?
          </h2>
          <p className="text-xl text-gray-600">
            Because life's too short to be stable!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-cyan-50 to-orange-50 p-8 rounded-3xl border-2 border-cyan-100 hover:border-cyan-300 transition-all shadow-sm hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}