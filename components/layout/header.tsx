import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Next Template
        </Link>
      </div>
    </header>
  );
}