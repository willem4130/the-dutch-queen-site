/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // ENHANCED TYPOGRAPHY SYSTEM - Royal theatrical fonts
        'display-primary': ['Cinzel', 'Times New Roman', 'Times', 'serif'],
        'display-secondary': ['Playfair Display', 'Georgia', 'Times', 'serif'],
        'body-primary': ['Source Sans Pro', 'Arial', 'Helvetica', 'sans-serif'],
        'body-accent': ['Inter', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        'nav-primary': ['Oswald', 'Arial Black', 'Helvetica Bold', 'sans-serif'],
        
        // Legacy support (existing components)
        'cinzel': ['Cinzel', 'serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'source': ['Source Sans Pro', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      fontSize: {
        // RESPONSIVE TYPOGRAPHY SCALES using CSS custom properties
        'display-xl': ['var(--text-display-xl)', { lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-tight)' }],
        'display-lg': ['var(--text-display-lg)', { lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-tight)' }],
        'display-md': ['var(--text-display-md)', { lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-normal)' }],
        'display-sm': ['var(--text-display-sm)', { lineHeight: 'var(--leading-heading)', letterSpacing: 'var(--tracking-normal)' }],
        
        'h1-size': ['var(--text-h1)', { lineHeight: 'var(--leading-heading)', letterSpacing: 'var(--tracking-normal)' }],
        'h2-size': ['var(--text-h2)', { lineHeight: 'var(--leading-heading)', letterSpacing: 'var(--tracking-normal)' }],
        'h3-size': ['var(--text-h3)', { lineHeight: 'var(--leading-heading)', letterSpacing: 'var(--tracking-normal)' }],
        'h4-size': ['var(--text-h4)', { lineHeight: 'var(--leading-heading)', letterSpacing: 'var(--tracking-normal)' }],
        'h5-size': ['var(--text-h5)', { lineHeight: 'var(--leading-heading)', letterSpacing: 'var(--tracking-normal)' }],
        'h6-size': ['var(--text-h6)', { lineHeight: 'var(--leading-heading)', letterSpacing: 'var(--tracking-normal)' }],
        
        'body-xl': ['var(--text-xl)', { lineHeight: 'var(--leading-body)', letterSpacing: 'var(--tracking-normal)' }],
        'body-lg': ['var(--text-lg)', { lineHeight: 'var(--leading-body)', letterSpacing: 'var(--tracking-normal)' }],
        'body-size': ['var(--text-base)', { lineHeight: 'var(--leading-body)', letterSpacing: 'var(--tracking-normal)' }],
        'body-sm': ['var(--text-sm)', { lineHeight: 'var(--leading-body)', letterSpacing: 'var(--tracking-normal)' }],
        'body-xs': ['var(--text-xs)', { lineHeight: 'var(--leading-body)', letterSpacing: 'var(--tracking-normal)' }],
        
        'nav-size': ['var(--text-lg)', { lineHeight: 'var(--leading-interface)', letterSpacing: 'var(--tracking-wider)' }],
        'button-size': ['var(--text-base)', { lineHeight: 'var(--leading-interface)', letterSpacing: 'var(--tracking-wider)' }],
        'label-size': ['var(--text-sm)', { lineHeight: 'var(--leading-interface)', letterSpacing: 'var(--tracking-wide)' }],
      },
      lineHeight: {
        'display': 'var(--leading-display)',
        'heading': 'var(--leading-heading)', 
        'body': 'var(--leading-body)',
        'interface': 'var(--leading-interface)',
        
        'display-line-height': 'var(--leading-display)',
        'h1-line-height': 'var(--leading-heading)',
        'h2-line-height': 'var(--leading-heading)',
        'h3-line-height': 'var(--leading-heading)',
        'h4-line-height': 'var(--leading-heading)',
        'h5-line-height': 'var(--leading-heading)',
        'h6-line-height': 'var(--leading-heading)',
        'body-line-height': 'var(--leading-body)',
      },
      letterSpacing: {
        'tight': 'var(--tracking-tight)',
        'normal': 'var(--tracking-normal)',
        'wide': 'var(--tracking-wide)',
        'wider': 'var(--tracking-wider)',
        'widest': 'var(--tracking-widest)',
        
        'display-letter-spacing': 'var(--tracking-tight)',
        'h1-letter-spacing': 'var(--tracking-normal)',
        'h2-letter-spacing': 'var(--tracking-normal)',
        'h3-letter-spacing': 'var(--tracking-normal)',
        'h4-letter-spacing': 'var(--tracking-normal)',
        'h5-letter-spacing': 'var(--tracking-normal)',
        'h6-letter-spacing': 'var(--tracking-normal)',
        'body-letter-spacing': 'var(--tracking-normal)',
        'nav-letter-spacing': 'var(--tracking-wider)',
        'button-letter-spacing': 'var(--tracking-wider)',
      },
      fontWeight: {
        'light': 'var(--weight-light)',
        'normal': 'var(--weight-normal)',
        'medium': 'var(--weight-medium)',
        'semibold': 'var(--weight-semibold)',
        'bold': 'var(--weight-bold)',
        'extrabold': 'var(--weight-extrabold)',
        'black': 'var(--weight-black)',
      },
      textShadow: {
        'subtle': 'var(--shadow-text-subtle)',
        'dramatic': 'var(--shadow-text-dramatic)',
        'stage': 'var(--shadow-text-stage)',
        'royal': 'var(--shadow-text-royal)',
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // ========================================
        // ENHANCED THEATRICAL COLOR SYSTEM
        // Complete Tailwind integration for The Dutch Queen
        // ========================================
        
        // ROYAL BRONZE FAMILY - Foundation & metallic range
        'royal-bronze': 'oklch(var(--royal-bronze))',
        'royal-bronze-dark': 'oklch(var(--royal-bronze-dark))',
        'royal-bronze-light': 'oklch(var(--royal-bronze-light))',
        
        // Crown Gold - Premium metallic highlights
        'crown-gold': 'oklch(var(--crown-gold))',
        'crown-gold-shimmer': 'oklch(var(--crown-gold-shimmer))',
        'crown-gold-deep': 'oklch(var(--crown-gold-deep))',

        // BURGUNDY FAMILY - Foundation & velvet depths
        'queen-burgundy': 'oklch(var(--queen-burgundy))',
        'queen-burgundy-dark': 'oklch(var(--queen-burgundy-dark))',
        'velvet-burgundy': 'oklch(var(--velvet-burgundy))',
        'velvet-wine': 'oklch(var(--velvet-wine))',
        'velvet-shadow': 'oklch(var(--velvet-shadow))',

        // PREMIUM METALLICS - Stage & performance
        'stage-platinum': 'oklch(var(--stage-platinum))',
        'stage-platinum-bright': 'oklch(var(--stage-platinum-bright))',
        'stage-platinum-shadow': 'oklch(var(--stage-platinum-shadow))',
        'rock-steel': 'oklch(var(--rock-steel))',
        'rock-steel-bright': 'oklch(var(--rock-steel-bright))',
        'rock-steel-dark': 'oklch(var(--rock-steel-dark))',

        // PEARL HIGHLIGHTS - Drag queen shimmer
        'pearl-white': 'oklch(var(--pearl-white))',
        'pearl-cream': 'oklch(var(--pearl-cream))',
        'pearl-shimmer': 'oklch(var(--pearl-shimmer))',

        // THEATRICAL LIGHTING - Stage colors
        'spotlight-white': 'oklch(var(--spotlight-white))',
        'stage-amber': 'oklch(var(--stage-amber))',
        'stage-amber-deep': 'oklch(var(--stage-amber-deep))',
        'royal-purple': 'oklch(var(--royal-purple))',
        'royal-purple-deep': 'oklch(var(--royal-purple-deep))',

        // BACKGROUND SYSTEM - Professional stage gradients
        'deep-black': 'oklch(var(--deep-black))',
        'rich-black': 'oklch(var(--rich-black))',
        'charcoal-stage': 'oklch(var(--charcoal-stage))',
        'charcoal-soft': 'oklch(var(--charcoal-soft))',
        'midnight-velvet': 'oklch(var(--midnight-velvet))',
        'backstage-dark': 'oklch(var(--backstage-dark))',

        // ACCESSIBILITY COMPLIANT TEXT COLORS
        'text-on-dark': 'oklch(var(--text-on-dark))',
        'text-on-bronze': 'oklch(var(--text-on-bronze))',
        'text-on-burgundy': 'oklch(var(--text-on-burgundy))',
        'text-muted-light': 'oklch(var(--text-muted-light))',
        'text-muted-dark': 'oklch(var(--text-muted-dark))',

        // INTERACTIVE STATES - Hover & focus effects
        'bronze-hover': 'oklch(var(--bronze-hover))',
        'burgundy-hover': 'oklch(var(--burgundy-hover))',
        'steel-hover': 'oklch(var(--steel-hover))',
        'focus-ring': 'oklch(var(--focus-ring))',

        // Legacy colors for compatibility
        'warm-white': 'oklch(var(--warm-white))',
        'stage-purple': 'oklch(var(--stage-purple))',
        'accent-steel': 'oklch(var(--accent-steel))',
        'accent-bronze': 'oklch(var(--accent-bronze))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}