import { RevealAnimation } from "@/components/shared/RevealAnimation";
// Removed lucide-react Linkedin import
import Link from "next/link";

export const metadata = {
  title: "Leadership Team | MANYA Soft Solutions",
};

const leaders = [
  {
    name: "Vikram Reddy",
    title: "Chief Executive Officer",
    image: "https://i.pravatar.cc/400?img=11",
    linkedin: "#"
  },
  {
    name: "Ananya Sharma",
    title: "Chief Technology Officer",
    image: "https://i.pravatar.cc/400?img=5",
    linkedin: "#"
  },
  {
    name: "Siddharth Rao",
    title: "VP of Engineering",
    image: "https://i.pravatar.cc/400?img=13",
    linkedin: "#"
  },
  {
    name: "Meera Menon",
    title: "Head of AI & Cloud Operations",
    image: "https://i.pravatar.cc/400?img=9",
    linkedin: "#"
  },
  {
    name: "Arjun Desai",
    title: "Director of Enterprise Architecture",
    image: "https://i.pravatar.cc/400?img=33",
    linkedin: "#"
  },
  {
    name: "Priya Patel",
    title: "Head of Client Success",
    image: "https://i.pravatar.cc/400?img=44",
    linkedin: "#"
  }
];

export default function LeadershipPage() {
  return (
    <div className="flex flex-col gap-12">
      <RevealAnimation>
        <h2 className="text-3xl font-bold text-text-primary mb-6">Our Leadership</h2>
        <p className="text-lg text-text-secondary max-w-2xl mb-12">
          Guided by industry veterans with decades of collective experience delivering transformative technology for Fortune 500 companies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <div key={i} className="group flex flex-col gap-4">
              <div className="overflow-hidden rounded-xl bg-surface-muted aspect-[3/4] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Link href={leader.linkedin} className="w-10 h-10 rounded-full bg-white text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">{leader.name}</h3>
                <p className="text-brand-primary font-medium">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealAnimation>
    </div>
  );
}
