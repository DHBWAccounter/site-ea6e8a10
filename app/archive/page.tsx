import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';

interface NewsItem {
  date: string;
  title: string;
  href: string;
}

interface NewsMonth {
  month: string;
  items: NewsItem[];
}

const newsArchive: NewsMonth[] = [
  {
    month: 'December 2025',
    items: [
      { date: 'Dec 9, 2025', title: 'Bitcoin in 10vor10', href: '/bitcoin-association-switzerland/2014/01/14/bitcoin-in-10vor10' },
      { date: 'Dec 9, 2025', title: 'Marc Faber points readers to Bitcoin', href: '/bitcoin-association-switzerland/2014/06/04/marc-faber-points-readers-to-bitcoin' },
    ],
  },
  {
    month: 'May 2025',
    items: [
      { date: 'May 31, 2025', title: '𝗦𝘁𝗮𝘁𝗲𝗺𝗲𝗻𝘁 𝗼𝗻 𝘁𝗵𝗲 𝟭𝟮-𝗣𝗼𝗶𝗻𝘁 𝗣𝗿𝗼𝗴𝗿𝗮𝗺 𝗳𝗼𝗿 𝗮 𝗙𝗼𝗿𝘄𝗮𝗿𝗱-𝗟𝗼𝗼𝗸𝗶𝗻𝗴 𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗙𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝗖𝗲𝗻𝘁𝗲𝗿', href: '/bitcoin-association-switzerland/2025/12/8/-' },
    ],
  },
  {
    month: 'February 2025',
    items: [
      { date: 'Feb 28, 2025', title: 'Bitcoin Association Switzerland Welcomes the Federal Council\'s Endorsement of Enhanced Bitcoin Regulation', href: '/bitcoin-association-switzerland/2025/2/28/bitcoin-association-switzerland-welcomes-the-federal-councils-endorsement-of-enhanced-bitcoin-regulation' },
    ],
  },
  {
    month: 'November 2024',
    items: [
      { date: 'Nov 13, 2024', title: 'Bitcoin Association Switzerland appoints new board, sets bold vision for the future', href: '/bitcoin-association-switzerland/2025/12/8/bitcoin-association-switzerland-appoints-new-board-sets-bold-vision-for-the-future' },
    ],
  },
  {
    month: 'October 2024',
    items: [
      { date: 'Oct 27, 2024', title: 'Announcement from the Board of the Bitcoin Association Switzerland', href: '/bitcoin-association-switzerland/2025/12/8/announcement-from-the-board-of-the-bitcoin-association-switzerland' },
    ],
  },
  {
    month: 'August 2022',
    items: [
      { date: 'Aug 10, 2022', title: 'Prudential Treatment of Cryptoasset Exposures II', href: '/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii' },
    ],
  },
  {
    month: 'June 2021',
    items: [
      { date: 'Jun 27, 2021', title: 'Prudential Treatment of Cryptoasset Exposures', href: '/bitcoin-association-switzerland/2021/7/3/comments-of-bitcoin-association-switzerland-on-the-draft-revised-vasp-guidance' },
    ],
  },
  {
    month: 'April 2021',
    items: [
      { date: 'Apr 20, 2021', title: 'Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance', href: '/bitcoin-association-switzerland/2021/6/23/01ts1e8cggntafbag86wvwbztvudvh' },
    ],
  },
  {
    month: 'June 2020',
    items: [
      { date: 'Jun 20, 2020', title: 'Our Comment on the risk assessment for global Stablecoins of the G20\'s Financial Stability Board', href: '/bitcoin-association-switzerland/on-the-risk-assessment-for-global-stablecoins-of-the-g20s-financial-stability-board' },
    ],
  },
  {
    month: 'April 2020',
    items: [
      { date: 'Apr 9, 2020', title: 'Our Comment on GWV-FINMA adjustment for FinSA / FinIA', href: '/bitcoin-association-switzerland/2020/4/9/our-comment-on-gwv-finma-adjustment-for-finsa-finia' },
    ],
  },
  {
    month: 'March 2020',
    items: [
      { date: 'Mar 13, 2020', title: 'Our Comment on "Designing a prudential treatment for cryptoassets" of the Basel Committee on Banking Supervision', href: '/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision' },
    ],
  },
  {
    month: 'December 2019',
    items: [
      { date: 'Dec 3, 2019', title: 'Crypto Valley Association Issues Questionable Recommendations', href: '/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations' },
    ],
  },
  {
    month: 'June 2019',
    items: [
      { date: 'Jun 27, 2019', title: 'Our Comment on the Swiss Blockchain Law', href: '/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law' },
    ],
  },
];

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-64 flex-shrink-0">
            <nav className="space-y-1">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">News</p>
              <Link href="/bitcoin-association-switzerland" className="block py-2 text-gray-400 hover:text-white transition-colors">
                News
              </Link>
              <Link href="/archive" className="block py-2 text-primary font-medium">
                Archive
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="space-y-8">
              {newsArchive.map((monthGroup) => (
                <div key={monthGroup.month}>
                  <h2 className="text-lg font-semibold text-primary mb-4 border-b border-gray-700 pb-2">
                    {monthGroup.month}
                  </h2>
                  <div className="space-y-3">
                    {monthGroup.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <span className="text-gray-500 text-sm whitespace-nowrap min-w-[100px]">
                          {item.date}
                        </span>
                        <Link
                          href={item.href}
                          className="text-gray-300 hover:text-primary transition-colors"
                        >
                          {item.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}