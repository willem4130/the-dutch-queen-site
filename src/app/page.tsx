import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { PerformancesSection } from "@/components/sections/performances";
import { ShowsSection } from "@/components/sections/shows";
import { ContactSection } from "@/components/sections/contact";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <PerformancesSection />
        <ShowsSection />
        <ContactSection />
      </main>
    </div>
  );
}
