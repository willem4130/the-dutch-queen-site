import { HeroSectionMinimal } from "@/components/sections/hero-minimal";
import { AboutSectionMinimal } from "@/components/sections/about-minimal";
import { PerformancesSection } from "@/components/sections/performances";
import { MediaGallerySection } from "@/components/sections/gallery";
import { ContactSection } from "@/components/sections/contact";
import { NavigationMinimal } from "@/components/navigation-minimal";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationMinimal />
      
      <main>
        <div id="home">
          <HeroSectionMinimal />
        </div>
        <div id="about">
          <AboutSectionMinimal />
        </div>
        <div id="performances">
          <PerformancesSection />
        </div>
        <div id="gallery">
          <MediaGallerySection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
