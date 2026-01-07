import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-64 flex-shrink-0">
            <nav className="space-y-1">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">About</p>
              <Link href="/about-1" className="block py-2 text-primary font-medium">
                About
              </Link>
              <Link href="/board" className="block py-2 text-gray-400 hover:text-white transition-colors">
                Board
              </Link>
              <Link href="/finances" className="block py-2 text-gray-400 hover:text-white transition-colors">
                Finances
              </Link>
              <Link href="/statutes" className="block py-2 text-gray-400 hover:text-white transition-colors">
                Statutes
              </Link>
              <Link href="/media-kit" className="block py-2 text-gray-400 hover:text-white transition-colors">
                Media Kit
              </Link>
              <Link href="/contact-1" className="block py-2 text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              About Bitcoin Association Switzerland
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6 text-lg">
                We form an active community of enthusiasts with regular events, try to resolve open legal questions, and educate the public by providing a contact point for media inquiries.
              </p>

              <p className="text-gray-300 mb-6">
                Bitcoin has the potential not only to revolutionize online payments, but also to give control over their financial transactions and assets back to individuals, and to serve as an asset with exceptionally strong property guarantees. Furthermore, its technology has the potential to serve as a platform for countless other services that can benefit from decentralized consensus and cryptographically secure tracking of property.
              </p>

              <p className="text-gray-300 mb-6">
                As an Association, we want to pave the way for Bitcoin to flourish and unfold its full potential.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Our Goals</h2>
              
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>Form an active community of Bitcoin enthusiasts</li>
                <li>Organize regular meetups and educational events</li>
                <li>Resolve open legal questions regarding Bitcoin</li>
                <li>Educate the public about Bitcoin technology</li>
                <li>Provide a contact point for media inquiries</li>
                <li>Advocate for sensible Bitcoin regulation in Switzerland</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}