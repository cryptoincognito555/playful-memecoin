import { motion } from "motion/react";
import { Twitter, MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/Wobbleonsolana",
    handle: "@Wobbleonsolana",
    color: "from-blue-400 to-blue-600",
    hoverColor: "hover:from-blue-500 hover:to-blue-700",
  },
  {
    name: "Telegram",
    icon: Send,
    url: "https://t.me/wobbleonsolana",
    handle: "t.me/wobbleonsolana",
    color: "from-sky-400 to-sky-600",
    hoverColor: "hover:from-sky-500 hover:to-sky-700",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    handle: "discord.gg/wobble",
    color: "from-purple-400 to-purple-600",
    hoverColor: "hover:from-purple-500 hover:to-purple-700",
  },
];

export function Community() {
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
            Join the Wobble
          </h2>
          <p className="text-xl text-gray-600">
            Connect with fellow wobblers and stay updated on the latest!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Button
        asChild
        variant="outline"
        className={`w-full h-auto py-8 rounded-3xl border-2 bg-gradient-to-br ${social.color} ${social.hoverColor} text-white hover:text-white border-transparent shadow-lg hover:shadow-2xl transition-all`}
      >
        <a href={social.url} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center justify-center text-center gap-2">
  <social.icon className="w-8 h-8" />
  <div className="flex flex-col items-center justify-center leading-tight">
    <span className="text-lg font-medium">{social.name}</span>
    <span className="text-sm opacity-90">{social.handle}</span>
  </div>
</div>
  </a>
      </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-cyan-500 to-orange-500 p-12 rounded-3xl text-center text-white shadow-2xl shadow-cyan-500/30"
        >
          <h3 className="text-4xl mb-4">Ready to Wobble?</h3>
          <p className="text-xl mb-8 opacity-90">
            Don't miss out on the most fun memecoin in crypto!
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
