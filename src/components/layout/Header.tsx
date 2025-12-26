"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servico", label: "Serviço" },
  { href: "/processo", label: "Processo" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl"
            style={{ color: '#1a1a1a', letterSpacing: '0.15em' }}
          >
            HIDAKA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors"
                style={{
                  color: pathname === link.href ? '#8b7355' : '#4a4a4a',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className="block w-full h-px transition-all duration-300 origin-center"
                style={{
                  backgroundColor: '#1a1a1a',
                  transform: isOpen ? 'rotate(45deg) translateY(7px)' : 'none',
                }}
              />
              <span
                className="block w-full h-px transition-opacity duration-300"
                style={{
                  backgroundColor: '#1a1a1a',
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-full h-px transition-all duration-300 origin-center"
                style={{
                  backgroundColor: '#1a1a1a',
                  transform: isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e5e5e5',
          maxHeight: isOpen ? '400px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
        aria-hidden={!isOpen}
      >
        <div className="container py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base py-3"
              style={{
                color: pathname === link.href ? '#8b7355' : '#4a4a4a',
                borderBottom: '1px solid #f5f5f5',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
