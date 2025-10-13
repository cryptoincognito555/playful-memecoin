import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { HowToBuy } from "./components/HowToBuy";
import { Tokenomics } from "./components/Tokenomics";
import { Roadmap } from "./components/Roadmap";
import { FAQ } from "./components/FAQ";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";

export default function App() {
  return (
    <div className="size-full">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Community />
      <Footer />
      <Chatbot />
    </div>
  );
}