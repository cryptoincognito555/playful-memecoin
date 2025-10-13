import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-purple-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">WOBBLE</div>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Just a fun memecoin made by the community. Not financial advice. DYOR. Wobble responsibly! 
          </p>
        </div>

        <div className="border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-200 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 fill-pink-400 text-pink-400" /> by the Wobble Community
          </p>
          <p className="text-blue-300 text-sm mt-2">
            © 2025 WOBBLE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}