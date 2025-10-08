import { motion } from "motion/react";
import { Wallet, ArrowDownUp, ShoppingCart, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Create a Wallet",
    description: "Download Phantom or any Solana-compatible wallet from the app store or extension store.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: ArrowDownUp,
    title: "Get Some SOL",
    description: "Purchase SOL from an exchange like Coinbase, Binance, or directly through your wallet.",
    color: "from-blue-500 to-orange-500",
  },
  {
    icon: ShoppingCart,
    title: "Swap for WOBBLE",
    description: "Visit Raydium or Jupiter and swap your SOL for WOBBLE using our contract address.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: PartyPopper,
    title: "Start Wobbling!",
    description: "Congratulations! You're now a proud member of the WOBBLE community. Welcome aboard! 🎉",
    color: "from-yellow-500 to-cyan-500",
  },
];

export function HowToBuy() {
  return (
    <section id="howtobuy" className="py-20 px-4 bg-gradient-to-br from-cyan-50 via-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
            How to Buy WOBBLE
          </h2>
          <p className="text-xl text-gray-600">
            Get your WOBBLE in 4 easy steps!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100 hover:border-cyan-200 transition-all h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-cyan-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 border-t-2 border-r-2 border-cyan-400 transform rotate-45" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contract Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-white p-8 rounded-3xl shadow-xl border-2 border-cyan-100 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl mb-4 text-center">Contract Address</h3>
          <div className="bg-gradient-to-r from-cyan-50 to-orange-50 p-5 rounded-2xl border-2 border-cyan-200">
            <code className="text-sm md:text-base text-gray-800 break-all block text-center">
              0x01234567890abcdef1234567890abcdef12345678
            </code>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            ⚠️ Always verify the contract address before purchasing!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
