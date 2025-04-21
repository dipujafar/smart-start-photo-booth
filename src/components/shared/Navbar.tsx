"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "./Container";
import logo from "@/assets/images/logo.png";

type DropdownProps = {
  isOpen: boolean;
  items: { title: string; href: string }[];
  onClose: () => void;
};

const Dropdown = ({ isOpen, items, onClose }: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg"
    >
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="block px-4 py-2 text-sm hover:bg-gray-100"
          onClick={onClose}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

type NavItemProps = {
  title: string;
  href: string;
  dropdownItems?: { title: string; href: string }[];
  isMobile?: boolean;
  onClick?: () => void;
};

const NavItem = ({ title, dropdownItems, isMobile = false }: NavItemProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hasDropdown = dropdownItems && dropdownItems.length > 0;

  const toggleDropdown = () => {
    if (hasDropdown) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Use `group` for hover effect on larger screens (md and above)
  return (
    <div className="relative group">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 text-sm font-semibold transition-colors hover:text-gray-600"
      >
        {title}
        {hasDropdown && (
          <ChevronDown
            className={cn(
              "ml-1 h-4 w-4 transition-transform",
              dropdownOpen && "rotate-180"
            )}
          />
        )}
      </button>

      {/* Desktop hover dropdown */}
      {hasDropdown && !isMobile && (
        <div className="absolute left-0 hidden  space-y-1 w-48 bg-white rounded-md shadow-lg group-hover:block">
          {dropdownItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="px-4 py-2 text-sm hover:bg-gray-100 flex justify-between group relative"
            >
              {item.title}
              <ChevronRight size={18} color="gray" className="" />
            </Link>
          ))}
        </div>
      )}

      {/* Mobile dropdown */}
      {hasDropdown && isMobile && dropdownOpen && (
        <Dropdown
          isOpen={dropdownOpen}
          items={dropdownItems}
          onClose={closeDropdown}
        />
      )}
    </div>
  );
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sample dropdown items

  const eventRentalsItems = [
    { title: "Photobooth", href: "/photo-booths" },
    { title: "Phonebooth", href: "/event" },
    { title: "Packages", href: "/photo-booths#package" },
    { title: "Connect", href: "/event#booking" },
    { title: "Backdrops", href: "/rent" },
  
  ];

  const aboutUsItems = [
    { title: "About Us", href: "/about-us" },
    { title: "Meet Our Team", href: "/about-us#meet-team" },
    { title: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-primary-bg text-base">
      <Container>
        <header
          className={cn(
            "sticky top-0 z-50 w-full border-gray-100 transition-shadow duration-200",
            scrolled && "shadow-md"
          )}
        >
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="Sharpshooters Logo"
                  width={1200}
                  height={1200}
                  className="max-h-10 max-w-16"
                />
                <div className="ml-2 flex flex-col sm:ml-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800 sm:text-xs">
                    Sharpshooters of the
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800 sm:text-xs">
                    Photobooth World
                  </span>
                </div>
              </Link>
            </div>

            <nav className="hidden items-center space-x-1 md:flex">
              <Link href={"/"} className="text-sm font-semibold">
                Home
              </Link>
              <NavItem
                title="Event Rentals"
                href="/event-rentals"
                dropdownItems={eventRentalsItems}
              />
              <Link
                href={"/about-us#why-choose-us"}
                className="text-sm font-semibold"
              >
                Why choose Us
              </Link>
              <NavItem
                title="About Us"
                href="/about-us"
                dropdownItems={aboutUsItems}
              />
            </nav>

            <div className="hidden md:block">
              <Link
                href="/event#booking"
                className="rounded-3xl bg-primary-gold px-6 py-4 text-sm font-medium uppercase text-white transition-colors hover:bg-[#b1a475]"
              >
                Book Now
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          <div
            className={cn(
              "fixed inset-0 z-40 transform bg-white transition-transform duration-300 ease-in-out md:hidden",
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex h-16 items-center justify-between border-b border-gray-100 px-4">
              <Link
                href="/"
                className="flex items-center"
                onClick={closeMobileMenu}
              >
                <Image
                  src={logo}
                  alt="Sharpshooters Logo"
                  width={1200}
                  height={1200}
                  className="max-h-10 max-w-16"
                />
                <div className="ml-2 flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">
                    Sharpshooters of the
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">
                    Photobooth World
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
                onClick={closeMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-2 py-4">
              <div className="space-y-1">
                <Link
                  href={"/"}
                  className="font-medium mx-4"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <NavItem
                  title="Event Rentals"
                  href="/event-rentals"
                  dropdownItems={eventRentalsItems}
                  isMobile
                  onClick={closeMobileMenu}
                />
                <Link
                  href={"/about-us#why-choose-us"}
                  className="font-medium mx-4"
                  onClick={closeMobileMenu}
                >
                  Why choose Us
                </Link>
                <NavItem
                  title="About Us"
                  href="/about-us"
                  dropdownItems={aboutUsItems}
                  isMobile
                  onClick={closeMobileMenu}
                />
              </div>
              <div className="mt-6 px-2">
                <Link
                  href="/event#booking"
                  className="block w-full rounded bg-[#c0b283] px-4 py-3 text-center text-sm font-medium uppercase text-white"
                  onClick={closeMobileMenu}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </header>
      </Container>
    </div>
  );
}
