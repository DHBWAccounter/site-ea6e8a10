import Image from 'next/image';
import Link from 'next/link';

interface InfoCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

function InfoCard({ imageSrc, imageAlt, title, description, linkText, linkHref }: InfoCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="py-6">
        <h2 className="text-2xl font-bold text-white mb-3">
          <Link href={linkHref} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h2>
        <p className="text-gray-400 mb-4">{description}</p>
        <Link
          href={linkHref}
          className="text-primary hover:text-white transition-colors font-medium"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export function InfoCards() {
  return (
    <section className="bg-background py-16 md:py-24 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <InfoCard
            imageSrc="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg"
            imageAlt="About Bitcoin Association Switzerland"
            title="About"
            description="Find out about our organization and mission."
            linkText="Learn More →"
            linkHref="/about-1"
          />
          <InfoCard
            imageSrc="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg"
            imageAlt="Join Bitcoin Association Switzerland"
            title="Join US"
            description="You can become a contributor to our cause, or participate yourself."
            linkText="Find Out How →"
            linkHref="/meetups-events"
          />
        </div>
      </div>
    </section>
  );
}