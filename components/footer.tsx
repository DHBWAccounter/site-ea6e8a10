import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-background border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <a
            href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            Meetup
          </a>
          <a
            href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            Bitcoin Lectures
          </a>
          <a
            href="https://x.com/bitcoin_ch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            X
          </a>
        </div>

        {/* Bitcoin Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
            alt="Bitcoin"
            width={60}
            height={60}
            className="opacity-50 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Back to Top */}
        <div className="text-center mb-8">
          <Link
            href="#header"
            className="text-gray-400 hover:text-primary transition-colors text-sm"
          >
            Back to Top
          </Link>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center items-center gap-6 text-sm">
          <Link
            href="/privacy"
            className="text-gray-500 hover:text-gray-300 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-500 hover:text-gray-300 transition-colors"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}