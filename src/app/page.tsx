import { HeroSectionMinimal } from "@/components/sections/hero-minimal";
import { AboutSectionMinimal } from "@/components/sections/about-minimal";
import { TourDatesSection } from "@/components/sections/tour-dates";
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
        <div id="performances">
          <TourDatesSection />
        </div>
        <div id="about">
          <AboutSectionMinimal />
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
