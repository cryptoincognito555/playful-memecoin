import { motion } from "motion/react";
import { Coins, Lock, Users, Rocket } from "lucide-react";

const tokenomicsData = [
  {
    icon: Coins,
    label: "Total Supply",
    value: "1,000,000,000",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Lock,
    label: "Liquidity Locked",
    value: "100%",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Users,
    label: "Community",
    value: "90%",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Rocket,
    label: "Marketing",
    value: "10%",
    color: "from-purple-500 to-pink-500",
  },
];

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-600">
            Simple, fair, and designed to wobble to the moon! 🌙
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-purple-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl mb-2 text-center">{item.value}</div>
              <div className="text-gray-600 text-center">{item.label}</div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}