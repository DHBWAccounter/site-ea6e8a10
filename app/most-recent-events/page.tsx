import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  location?: string;
  description: string;
  imageSrc: string;
  likes: number;
}

const events: Event[] = [
  {
    id: 'regular-meetups',
    title: 'Regular Meetups',
    date: 'Apr 1',
    displayDate: 'Friday 1 April 2022',
    time: '7:00 pm - 8:00 pm',
    description: 'Every second Wednesday we meet in Zurich and every fourth Wednesday in Geneva. There are also Bitcoin meetups in other cities on a less regular schedule. Please contact us if you plan to start a meetup in your city and we will help you as good as we can! Besides our regular beer & Bitcoin meetups, we organize various events. You can find an overview of our past events for this year below. Join us at meetup.com to sign up for our events!',
    imageSrc: 'https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1555097535318-T2XJTHLGARGBMIHCZ5IK/regular_meetup.jpeg?format=500w',
    likes: 1,
  },
  {
    id: 'lightning-meetup-elizabeth-stark',
    title: 'Lightning Meetup with Elizabeth Stark (CEO Lightning Labs)',
    date: 'Jan 13',
    displayDate: 'Monday 13 January 2020',
    time: '7:00 pm - 8:00 pm',
    location: 'Langstrasse 136',
    description: 'At this "Industry Insights" meetup, Elizabeth will give us some interesting insights into the Lightning Network. Short talk, no slides, q&a, causal get-together.',
    imageSrc: 'https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1580830689343-1T2NDNX01ILN41SPXMLS/z.jpeg?format=500w',
    likes: 0,
  },
  {
    id: 'bitcoin-christmas-meetup',
    title: 'Bitcoin Christmas Meetup Zürich',
    date: 'Dec 18',
    displayDate: 'Wednesday 18 December 2019',
    time: '7:00 pm - 11:59 pm',
    location: 'Langstrasse 136',
    description: 'Bitcoin Association Switzerland invited for a Christmas Special Bitcoin Meetup Zurich. Douglas Bakkum, Co-founder and CEO of Shift Cryptosecurity gave us some exciting insights into the industry\'s cat and mouse game of securing private keys',
    imageSrc: 'https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1580830436549-5ANR19EWCG0LJC0LPBQL/highres_486983933.jpeg?format=500w',
    likes: 0,
  },
  {
    id: 'bitcoin-offline',
    title: 'Who Needs the Internet Anyway: Taking Bitcoin Transactions Offline',
    date: 'Oct 15',
    displayDate: 'Tuesday 15 October 2019',
    time: '7:00 pm - 8:00 pm',
    location: 'Karl der Grosse',
    description: 'Bitcoin is considered to be currency of the internet. But what happens if someone has a poor internet connection, or loses it entirely? Neil takes a look at the technologies being built to keep Bitcoin running regardless of network disruptions, including Blockstream Satellite and goTenna mesh networks.',
    imageSrc: 'https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1580830028280-IM7APR9ZUNBI5YNURI4A/IMG_6354.jpeg?format=500w',
    likes: 0,
  },
  {
    id: 'andreas-antonopoulos',
    title: 'Andreas M. Antonopoulos: Thoughts on The Future of Programmable Money.',
    date: 'Jun 23',
    displayDate: 'Sunday 23 June 2019',
    time: '7:00 pm - 8:00 pm',
    location: 'Volkshaus',
    description: 'With over 1\'500 signup this was the biggest Bitcoin meetup event ever in Europe. Talks: Thoughts on The Future of Programmable Money - Andreas M. Antonopoulos. An enlightening speech about the future of programmable money ending with a standing ovation! A video of the speech can be found on YouTube. Cryptoasset Inheritance Planning - Pamela Morgan. Will your loved ones be able to access your bitcoin, ether, or other cryptoassets if something happens to you? For most cryptoasset owners, the answer is no. Attend this talk and learn how to start building a cryptoasset inheritance plan for your loved ones, without relying on a single third party, and without giving them your keys now.',
    imageSrc: 'https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354131936-O9QJ0IL9KE0GRA33IFGE/1.jpg?format=500w',
    likes: 1,
  },
  {
    id: 'sidechains-paul-sztorc',
    title: 'Sidechains on BTC -- Drivechain and Blind Merged Mining - Paul Sztorc',
    date: 'Jun 6',
    displayDate: 'Thursday 6 June 2019',
    time: '7:00 pm - 8:00 pm',
    location: 'Karl der Grosse',
    description: 'Drivechain is a proposed soft fork of Bitcoin that allows BTC to travel to and from any other piece of software. How does it work? Does it have any detrimental effects? Do we *want* some sidechains to fail (and why)?',
    imageSrc: 'https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563353920029-FNNDW3H0SC8JXSK4953P/paul.jpg?format=500w',
    likes: 1,
  },
  {
    id: 'general-assembly-2019',
    title: 'Annual General Assembly of the Bitcoin Association Switzerland - 2019',
    date: 'May 22',
    displayDate: 'Wednesday 22 May 2019',
    time: '7:00 pm - 8:00 pm',
    location: 'Volkshaus',
    description: 'The members of the Bitcoin Association Switzerland came together to discuss and decide on various things.',
    imageSrc: 'https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563353801249-II3IT1HTUUTQO7E0WDSN/logo_with_name_next_to_it_big.png?format=500w',
    likes: 1,
  },
  {
    id: 'dr-bob-mcelrath',
    title: 'On-Chain Defense in Depth - Dr. Bob McElrath',
    date: 'Jan 25',
    displayDate: 'Friday 25 January 2019',
    time: '7:00 pm - 8:00 pm',
    location: 'Karl der Grosse',
    description: 'In this tech-talk we examined all current and proposed mechanisms for creating a "Bitcoin Vault".',
    imageSrc: 'https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1555098023010-L99ESNM4E9YUE04P6595/dr.bob.jpeg?format=500w',
    likes: 1,
  },
];

export default function MostRecentEventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <hr className="border-gray-700 mb-12" />
        
        <div className="space-y-12">
          {events.map((event) => (
            <article key={event.id} className="flex flex-col md:flex-row gap-6">
              {/* Event Image */}
              <div className="md:w-64 flex-shrink-0">
                <Link href={`/most-recent-events/${event.id}`}>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={event.imageSrc}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              </div>

              {/* Event Details */}
              <div className="flex-1">
                {/* Date Badge */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-primary text-sm font-medium">
                      {event.date.split(' ')[0]}
                    </div>
                    <div className="text-white text-2xl font-bold">
                      {event.date.split(' ')[1]}
                    </div>
                    <div className="text-gray-400 text-xs">
                      7:00 pm
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3">
                  <Link href={`/most-recent-events/${event.id}`} className="hover:text-primary transition-colors">
                    {event.title}
                  </Link>
                </h2>

                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li>{event.displayDate}</li>
                  <li>{event.time}</li>
                  {event.location && (
                    <li>
                      {event.location}{' '}
                      <a
                        href={`http://maps.google.com/?q=${encodeURIComponent(event.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        (map)
                      </a>
                    </li>
                  )}
                </ul>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>

                <Link
                  href={`/most-recent-events/${event.id}`}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  View Event →
                </Link>

                <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                  <span>{event.likes} Likes</span>
                  <button className="hover:text-white transition-colors">Share</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}