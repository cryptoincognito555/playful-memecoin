import { motion } from "motion/react";
import { Check, Loader, Rocket } from "lucide-react";

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Launch & Foundation",
    status: "completed",
    items: [
      "✅ Token Launch on Solana",
      "✅ Website & Socials Launch",
      "✅ Community Building",
      "✅ Liquidity Pool Creation",
      "✅ Contract Verification",
    ],
  },
  {
    phase: "Phase 2",
    title: "Growth & Expansion",
    status: "current",
    items: [
      "🔄 CoinGecko Listing",
      "🔄 CoinMarketCap Listing",
      "🔄 10,000+ Holders",
      "🔄 Partnerships & Collaborations",
      "🔄 Influencer Marketing Campaign",
    ],
  },
  {
    phase: "Phase 3",
    title: "Ecosystem Development",
    status: "upcoming",
    items: [
      "🚀 NFT Collection Launch",
      "🚀 WOBBLE Staking Platform",
      "🚀 Merchandise Store",
      "🚀 Mobile App",
      "🚀 50,000+ Holders",
    ],
  },
  {
    phase: "Phase 4",
    title: "Moon Mission",
    status: "upcoming",
    items: [
      "🌙 Major CEX Listings",
      "🌙 WOBBLE Gaming Platform",
      "🌙 Global Marketing Push",
      "🌙 Cross-chain Bridge",
      "🌙 To The Moon! 🚀",
    ],
  },
];

export function Roadmap() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Check className="w-6 h-6 text-green-500" />;
      case "current":
        return <Loader className="w-6 h-6 text-blue-500 animate-spin" />;
      default:
        return <Rocket className="w-6 h-6 text-purple-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "from-green-500 to-emerald-600";
      case "current":
        return "from-cyan-500 to-blue-600";
      default:
        return "from-orange-500 to-yellow-500";
    }
  };

  return (
    <section id="roadmap" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
            Roadmap
          </h2>
          <p className="text-xl text-gray-600">
            Our journey to the moon! 🌙
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapPhases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${getStatusColor(phase.status)} p-[2px] rounded-3xl`}>
                <div className="bg-white p-6 rounded-3xl h-full">
                  {/* Phase Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)} text-white`}>
                      {phase.phase}
                    </span>
                    {getStatusIcon(phase.status)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl mb-6">{phase.title}</h3>

                  {/* Items */}
                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-lg">
            This is just the beginning! Follow our socials for real-time updates and surprises! 🎉
          </p>
        </motion.div>
      </div>
    </section>
  );
}