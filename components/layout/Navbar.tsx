"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/shared/PageContainer";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const hasDarkHero = 
    pathname === "/" || 
    pathname?.startsWith("/about") || 
    pathname?.startsWith("/careers") || 
    pathname?.startsWith("/case-studies") ||
    pathname?.startsWith("/services");
  
  const useDarkText = !hasDarkHero || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        isScrolled
          ? "h-[60px] bg-white shadow-nav"
          : "h-[72px] bg-transparent border-b border-white/10"
      )}
    >
      <PageContainer className="h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary text-white flex items-center justify-center font-bold font-display rounded-sm">
            M
          </div>
          <div className={cn(
            "flex flex-col font-display",
            useDarkText ? "text-text-primary" : "text-white"
          )}>
            <span className="font-bold tracking-tight text-lg leading-tight">MANYA</span>
            <span className="text-[10px] uppercase tracking-widest text-text-secondary leading-none">Soft Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={cn(
          "hidden lg:flex items-center gap-8 font-medium text-sm",
          useDarkText ? "text-text-primary" : "text-white"
        )}>
          <Link href="/services" className="hover:text-brand-primary transition-colors">Services</Link>
          <Link href="/industries" className="hover:text-brand-primary transition-colors">Industries</Link>
          <Link href="/case-studies" className="hover:text-brand-primary transition-colors">Case Studies</Link>
          <Link href="/about" className="hover:text-brand-primary transition-colors">About</Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant={useDarkText ? "secondary" : "ghost"}>Schedule a Call</Button>
          <Button variant="default">Get a Quote</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "lg:hidden p-2",
            useDarkText ? "text-text-primary" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </PageContainer>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-50 p-6 flex flex-col gap-6 overflow-y-auto">
          <nav className="flex flex-col gap-4 text-lg font-semibold text-text-primary">
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
            <Link href="/case-studies" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          </nav>
          <div className="flex flex-col gap-4 mt-8">
            <Button variant="secondary" className="w-full">Schedule a Call</Button>
            <Button variant="default" className="w-full">Get a Quote</Button>
          </div>
        </div>
      )}
    </header>
  );
}
