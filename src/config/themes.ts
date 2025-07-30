// Theme Configuration System for The Dutch Queen
// Automatically detects theme based on git branch or environment variable

export const themeConfigs = {
  'royal-bronze': {
    name: 'Royal Bronze Collection',
    description: 'Sophisticated bronze with luxury accents',
    primaryColor: '#B8860B', // Dark golden rod
    accentColor: '#CD853F',  // Peru bronze
    backgroundColor: '#1a1a1a',
    textColor: '#F5F5DC',    // Beige
    gradient: 'linear-gradient(135deg, #B8860B 0%, #8B4513 100%)'
  },
  'royal-gold': {
    name: 'Royal Gold Majesty',
    description: 'Opulent gold with regal sophistication',
    primaryColor: '#FFD700', // Gold
    accentColor: '#FFA500',  // Orange gold
    backgroundColor: '#0f0f0f',
    textColor: '#FFFAF0',    // Floral white
    gradient: 'linear-gradient(135deg, #FFD700 0%, #DAA520 100%)'
  },
  'midnight-luxury': {
    name: 'Midnight Luxury',
    description: 'Deep blacks with metallic highlights',
    primaryColor: '#2F2F2F', // Dark gray
    accentColor: '#C0C0C0',  // Silver
    backgroundColor: '#000000',
    textColor: '#E5E5E5',    // Light gray
    gradient: 'linear-gradient(135deg, #2F2F2F 0%, #000000 100%)'
  },
  'platinum-elegance': {
    name: 'Platinum Elegance',
    description: 'Cool metallic sophistication',
    primaryColor: '#E5E4E2', // Platinum
    accentColor: '#C0C0C0',  // Silver
    backgroundColor: '#1C1C1C',
    textColor: '#F8F8FF',    // Ghost white
    gradient: 'linear-gradient(135deg, #E5E4E2 0%, #C0C0C0 100%)'
  },
  'burgundy-rock': {
    name: 'Burgundy Rock Edge',
    description: 'Bold burgundy with metallic contrasts',
    primaryColor: '#800020', // Burgundy
    accentColor: '#A0522D',  // Sienna
    backgroundColor: '#1a0a0a',
    textColor: '#F5DEB3',    // Wheat
    gradient: 'linear-gradient(135deg, #800020 0%, #4B0000 100%)'
  },
  'royal-bronze-v2': {
    name: 'Royal Bronze Enhanced',
    description: 'Enhanced bronze with deeper richness',
    primaryColor: '#CD853F', // Peru
    accentColor: '#DEB887',  // Burlywood
    backgroundColor: '#2F1B14',
    textColor: '#F5F5DC',    // Beige
    gradient: 'linear-gradient(135deg, #CD853F 0%, #8B4513 100%)'
  },
  'burgundy-rock-v1': {
    name: 'Burgundy Rock Original',
    description: 'Original burgundy rock theme',
    primaryColor: '#722F37', // Dark burgundy
    accentColor: '#B22222',  // Fire brick
    backgroundColor: '#1C0A0A',
    textColor: '#FFE4E1',    // Misty rose
    gradient: 'linear-gradient(135deg, #722F37 0%, #8B0000 100%)'
  }
};

export function getCurrentTheme(): string {
  // Check if we're in a theme branch
  if (typeof window !== 'undefined') {
    // Client-side: Check URL or environment
    const hostname = window.location.hostname;
    if (hostname.includes('theme-royal-bronze')) return 'royal-bronze';
    if (hostname.includes('theme-royal-gold')) return 'royal-gold';
    if (hostname.includes('theme-midnight-luxury')) return 'midnight-luxury';
    if (hostname.includes('theme-platinum-elegance')) return 'platinum-elegance';
    if (hostname.includes('theme-burgundy-rock-v1')) return 'burgundy-rock-v1';
    if (hostname.includes('theme-burgundy-rock')) return 'burgundy-rock';
    if (hostname.includes('theme-royal-bronze-v2')) return 'royal-bronze-v2';
  }
  
  // Server-side: Check environment variable
  const themeFromEnv = process.env.THEME_VARIANT || process.env.NEXT_PUBLIC_THEME_VARIANT;
  if (themeFromEnv && themeConfigs[themeFromEnv as keyof typeof themeConfigs]) {
    return themeFromEnv;
  }
  
  // Default theme
  return 'royal-bronze';
}

export function getThemeConfig() {
  const currentTheme = getCurrentTheme();
  return themeConfigs[currentTheme as keyof typeof themeConfigs] || themeConfigs['royal-bronze'];
}

// CSS Custom Properties Generator
export function generateThemeCSS(themeName: string) {
  const theme = themeConfigs[themeName as keyof typeof themeConfigs];
  if (!theme) return '';
  
  return `
    :root {
      --theme-primary: ${theme.primaryColor};
      --theme-accent: ${theme.accentColor};
      --theme-background: ${theme.backgroundColor};
      --theme-text: ${theme.textColor};
      --theme-gradient: ${theme.gradient};
    }
  `;
}