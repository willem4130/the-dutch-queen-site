export interface PerformanceType {
  id: "full-band" | "acoustic";
  title: string;
  description: string;
  idealFor: string[];
  features: string[];
  songs: string[];
  imageUrl: string;
  imageAlt: string;
  imageTitle: string;
  imageDescription: string;
  colorTheme: "red" | "yellow";
  layoutReverse: boolean;
}

/**
 * Performance data configuration
 * Separates content from component logic for better maintainability
 */
export const performanceData: Record<"full-band" | "acoustic", PerformanceType> = {
  "full-band": {
    id: "full-band",
    title: "Full Band Experience",
    description: "The complete Queen experience with full instrumentation, theatrical staging, and stadium-level energy. Perfect for festivals, large venues, and events that demand maximum impact.",
    idealFor: [
      "Festivals & Large Venues",
      "Corporate Events", 
      "Concert Halls",
      "Stadium Shows"
    ],
    features: [
      "Full Band Setup",
      "Theatrical Production",
      "Complete Light Show",
      "Costume Changes"
    ],
    songs: [
      "Bohemian Rhapsody",
      "We Will Rock You", 
      "We Are The Champions",
      "Don't Stop Me Now",
      "Another One Bites The Dust",
      "Radio Ga Ga",
      "I Want To Break Free",
      "Killer Queen",
      "Fat Bottomed Girls",
      "Crazy Little Thing Called Love"
    ],
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    imageAlt: "Full band performance",
    imageTitle: "Stadium Energy",
    imageDescription: "Complete Queen experience with full production",
    colorTheme: "red",
    layoutReverse: false,
  },
  "acoustic": {
    id: "acoustic",
    title: "Acoustic Sessions",
    description: "Intimate, stripped-down versions of Queen's greatest hits with close audience interaction and emotional connection. Perfect for private events and acoustic venues.",
    idealFor: [
      "Private Events",
      "Acoustic Venues",
      "Intimate Gatherings", 
      "Special Occasions"
    ],
    features: [
      "Acoustic Instruments",
      "Close Interaction",
      "Storytelling",
      "Emotional Connection"
    ],
    songs: [
      "Love Of My Life",
      "The Show Must Go On",
      "Somebody To Love",
      "Bohemian Rhapsody (Unplugged)",
      "Who Wants To Live Forever",
      "Too Much Love Will Kill You",
      "I Want It All (Acoustic)",
      "These Are The Days Of Our Lives",
      "Is This The Real Life",
      "The Miracle"
    ],
    imageUrl: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    imageAlt: "Acoustic performance", 
    imageTitle: "Intimate Connection",
    imageDescription: "Stripped-down Queen classics with emotional depth",
    colorTheme: "yellow",
    layoutReverse: true,
  },
};

export const tabConfig = [
  {
    id: "full-band" as const,
    label: "Full Band Experience",
    activeClasses: "bg-gradient-to-r from-red-500 to-red-600 text-white",
    inactiveClasses: "text-gray-400 hover:text-white",
  },
  {
    id: "acoustic" as const, 
    label: "Acoustic Sessions",
    activeClasses: "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black",
    inactiveClasses: "text-gray-400 hover:text-white",
  },
];