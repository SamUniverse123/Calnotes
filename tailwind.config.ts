import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        bg: '#f3f7fe',
      main: '#FD9745',
      mainAccent: '#fc7303', // not needed for shadcn

      //subject colors
      'BrutY' : '#FFFF00',
      'BrutR' : '#FF4911',
      'BrutDB' : '#3300FF',
      'BrutLB' : '#7DF9FF',
      'BrutG' : '#2FFF2F',
      'BrutP' :'#9723c9'  ,

      //footer color
      'footer' : '#141520',
      'Fhover' : '#c8befd',


       },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        //neoBrut
        base: '5px'
      },
      boxShadow: {
        base: '4px 4px 0px 0px rgba(0,0,0,1)',
        subject: '5px 5px 0px 0px rgba(0,0,0,1)',
      },
      translate: {
        boxShadowX: '4px',
      boxShadowY: '4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      aspectRatio: {
        'card': '2/ 3',
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        
      },
    },
  },
  plugins: [require("tailwindcss-animate"),
  require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config

export default config