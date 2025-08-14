import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { PerformancesSection } from "@/components/sections/performances";
import { ShowsSection } from "@/components/sections/shows";
import { MediaGallerySection } from "@/components/sections/gallery";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BandMembersSection } from "@/components/sections/band-members";
import { TourHistorySection } from "@/components/sections/tour-history";
import { MusicPlayerSection } from "@/components/sections/music-player";
import { PressKitSection } from "@/components/sections/press-kit";
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
        <MediaGallerySection />
        <TestimonialsSection />
        <BandMembersSection />
        <TourHistorySection />
        <MusicPlayerSection />
        <PressKitSection />
        <ContactSection />
      </main>
    </div>
  );
}
