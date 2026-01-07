'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; external?: boolean }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'News',
    children: [
      { label: 'News', href: '/bitcoin-association-switzerland' },
      { label: 'Archive', href: '/archive' },
    ],
  },
  {
    label: 'Events',
    children: [
      { label: 'Roadshow 2025', href: '/roadshow-2025' },
      { label: 'Bitcoin Meetup (Zurich)', href: 'https://www.meetup.com/Bitcoin-Meetup-Switzerland/', external: true },
      { label: 'Bitcoin Meetup Geneva', href: 'https://www.meetup.com/Bitcoin-Meetup-Geneva', external: true },
      { label: 'Bitcoin Meetup Luzern', href: 'https://www.meetup.com/Bitcoin-Meetup-Luzern/', external: true },
      { label: 'Bitcoin Meetup Neuchatel', href: 'https://www.meetup.com/Bitcoin-Meetup-Neuchatel/', external: true },
      { label: 'Bitcoin Meetup Basel', href: 'https://www.meetup.com/bitcoin-meetup-basel/', external: true },
    ],
  },
  {
    label: 'membership',
    children: [
      { label: 'Private', href: '/private' },
      { label: 'Corporate', href: '/corporate' },
      { label: 'Our Corporate Members', href: '/our-corporate-members' },
    ],
  },
  {
    label: 'Participate',
    children: [
      { label: 'Meetups & Events', href: '/meetups-events' },
    ],
  },
  {
    label: 'About',
    children: [
      { label: 'About', href: '/about-1' },
      { label: 'Board', href: '/board' },
      { label: 'Finances', href: '/finances' },
      { label: 'Statutes', href: '/statutes' },
      { label: 'Media Kit', href: '/media-kit' },
      { label: 'Contact', href: '/contact-1' },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header id="header" className="bg-background sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
              alt="Bitcoin Association Switzerland"
              width={300}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="nav-link px-4 py-2 text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button className="nav-link px-4 py-2 text-sm font-medium flex items-center gap-1">
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {item.children && (
                      <div className="nav-dropdown">
                        {item.children.map((child) => (
                          child.external ? (
                            <a
                              key={child.label}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="nav-dropdown-item"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="nav-dropdown-item"
                            >
                              {child.label}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-gray-800">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-2 text-white hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-2 text-white hover:text-primary"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && item.children && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          child.external ? (
                            <a
                              key={child.label}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-2 text-sm text-gray-300 hover:text-primary"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block py-2 text-sm text-gray-300 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}