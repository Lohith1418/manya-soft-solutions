import { PageContainer } from "@/components/shared/PageContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-surface-subtle min-h-[70vh] flex items-center pt-24 pb-24">
      <PageContainer className="flex flex-col items-center justify-center text-center">
        <div className="text-[120px] md:text-[180px] font-black font-display text-brand-primary/10 leading-none mb-4">
          404
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Page Not Found</h1>
        <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
          We couldn't locate the page you're looking for. It might have been moved, renamed, or doesn't exist.
        </p>
        <div className="flex gap-4">
          <Button variant="default" size="lg" asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
