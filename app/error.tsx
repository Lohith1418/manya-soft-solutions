"use client";

import { PageContainer } from "@/components/shared/PageContainer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="bg-surface-subtle min-h-[70vh] flex items-center pt-24 pb-24">
      <PageContainer className="flex flex-col items-center justify-center text-center">
        <div className="text-[120px] md:text-[180px] font-black font-display text-accent-red/10 leading-none mb-4">
          500
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">System Exception</h1>
        <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
          An unexpected error occurred while processing your request. Our engineering team has been notified.
        </p>
        <Button variant="default" size="lg" onClick={() => reset()}>
          Attempt Recovery
        </Button>
      </PageContainer>
    </section>
  );
}
