import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js Template</h1>
      <p className="mb-4">This is a powerful template with TypeScript, React, Shadcn UI, Radix UI, and Tailwind CSS.</p>
      <Button>Get Started</Button>
    </div>
  );
}
