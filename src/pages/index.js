import Globe from "@/components/Globe";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Globe Section */}
      <main className="relative h-screen">
        <div className="absolute inset-0">
          <Globe />
        </div>
      </main>

      {/* Navigation Overlay */}
      <div className="absolute top-0 left-0 w-full p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Home Page</h1>
          <Link 
            href="/stories" 
            className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 backdrop-blur-sm"
          >
            Go to Stories Page
          </Link>
        </div>
      </div>
    </div>
  );
}