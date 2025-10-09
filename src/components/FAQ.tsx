import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What is WOBBLE?",
    answer: "WOBBLE is a community-driven memecoin built on the Solana blockchain. It's designed to be fun, fast, and accessible to everyone. Our mission is to bring joy to the crypto space while building a strong, engaged community.",
  },
  {
    question: "How do I buy WOBBLE?",
    answer: "You can buy WOBBLE by first getting a Solana wallet (like Phantom), purchasing SOL from an exchange, and then swapping it for WOBBLE on decentralized exchanges like Raydium or Jupiter using our contract address.",
  },
  {
    question: "Is WOBBLE safe?",
    answer: "Yes! WOBBLE has 100% liquidity locked, a renounced contract, and has been verified on the blockchain. However, as with all crypto investments, please do your own research and only invest what you can afford to lose.",
  },
  {
    question: "What makes WOBBLE different?",
    answer: "WOBBLE combines the fun of memecoins with a strong community focus. We have zero buy/sell taxes, locked liquidity, and a transparent tokenomics structure. Plus, we're built on Solana for lightning-fast transactions and minimal fees!",
  },
  {
    question: "What is the total supply?",
    answer: "The total supply of WOBBLE is 1 billion tokens. 90% is allocated to the community, and 10% is reserved for marketing and growth initiatives.",
  },
  {
    question: "Where can I see the price chart?",
    answer: "You can view our live price chart on DEX tracking platforms like DexScreener and GeckoTerminal. We're also working on getting listed on CoinGecko and CoinMarketCap!",
  },
  {
    question: "How can I join the community?",
    answer: "Join our vibrant community on Twitter, Telegram, and Discord! We're always excited to welcome new wobblers. Links can be found in the community section of our website.",
  },
  {
    question: "What are the future plans?",
    answer: "Check out our roadmap section! We have exciting plans including NFT launches, staking platforms, merchandise, CEX listings, and much more. Stay tuned to our social channels for updates!",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers! 🤔
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-r from-cyan-50 to-orange-50 rounded-2xl border-2 border-cyan-100 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center bg-gradient-to-r from-cyan-500 to-orange-500 p-8 rounded-3xl text-white shadow-xl shadow-cyan-500/30"
        >
          <h3 className="text-2xl mb-3">Still have questions?</h3>
          <p className="mb-6 opacity-90">
            Join our community and ask away! We're always happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-cyan-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block"
            >
              Join Telegram
            </a>
            <a
              href="#"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/30 transition-colors inline-block"
            >
              Join Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
