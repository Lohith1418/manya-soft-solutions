import Link from "next/link";
import { PageContainer } from "@/components/shared/PageContainer";
import { Button } from "@/components/ui/button";

const SocialIcon = ({ type }: { type: string }) => {
  if (type === "linkedin") return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
  if (type === "twitter") return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
  if (type === "youtube") return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2 9.4 2 12s.5 4.9.5 4.9A3.2 3.2 0 0 0 4.8 19c1.8.4 7.2.4 7.2.4s5.4 0 7.2-.4a3.2 3.2 0 0 0 2.3-2.1c.5-2 .5-4.9.5-4.9s-.5-2.8-.5-4.9a3.2 3.2 0 0 0-2.3-2.1C17.4 4.6 12 4.6 12 4.6s-5.4 0-7.2.4a3.2 3.2 0 0 0-2.3 2.1z"/><polygon points="9.5 15.5 15.5 12 9.5 8.5 9.5 15.5"/></svg>;
  if (type === "instagram") return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
  return null;
}

export function Footer() {
  return (
    <footer className="bg-brand-secondary text-white pt-20 pb-8">
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary text-white flex items-center justify-center font-bold font-display rounded-sm">
                M
              </div>
              <div className="flex flex-col font-display">
                <span className="font-bold tracking-tight text-lg leading-tight">MANYA</span>
                <span className="text-[10px] uppercase tracking-widest text-white/70 leading-none">Soft Solutions</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm">Smart Solutions. Stronger Tomorrow.</p>
            <div className="flex gap-4">
              <Link href="#" aria-label="LinkedIn" className="hover:text-brand-primary transition-colors"><SocialIcon type="linkedin" /></Link>
              <Link href="#" aria-label="Twitter" className="hover:text-brand-primary transition-colors"><SocialIcon type="twitter" /></Link>
              <Link href="#" aria-label="YouTube" className="hover:text-brand-primary transition-colors"><SocialIcon type="youtube" /></Link>
              <Link href="#" aria-label="Instagram" className="hover:text-brand-primary transition-colors"><SocialIcon type="instagram" /></Link>
            </div>
            <div className="text-sm text-white/70 mt-4">
              <p>Tirupati, India</p>
              <p>+91 123 456 7890</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 tracking-wide">Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/services/software-development" className="hover:text-brand-primary transition-colors">Software Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="hover:text-brand-primary transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/cloud-solutions" className="hover:text-brand-primary transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services/ai-solutions" className="hover:text-brand-primary transition-colors">AI Solutions</Link></li>
              <li><Link href="/services/digital-transformation" className="hover:text-brand-primary transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6 tracking-wide">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="/about/leadership" className="hover:text-brand-primary transition-colors">Leadership</Link></li>
              <li><Link href="/case-studies" className="hover:text-brand-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/careers" className="hover:text-brand-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-6 tracking-wide">Industries</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/industries/healthcare" className="hover:text-brand-primary transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/finance" className="hover:text-brand-primary transition-colors">Finance</Link></li>
              <li><Link href="/industries/retail" className="hover:text-brand-primary transition-colors">Retail</Link></li>
              <li><Link href="/industries/manufacturing" className="hover:text-brand-primary transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/education" className="hover:text-brand-primary transition-colors">Education</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-6 tracking-wide">Stay Connected</h3>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-white/70">Subscribe to our newsletter for insights and updates.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-primary w-full"
                />
                <Button variant="default">Subscribe</Button>
              </div>
              <Button variant="ghost" className="w-full mt-2">Get a Quote</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} MANYA Soft Solutions Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
