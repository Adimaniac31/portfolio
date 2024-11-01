/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        background: {
          light: "#F7F7F7", // Light off-white for background
          dark: "#1C1C1E",  // Dark charcoal for contrast backgrounds
        },
        
        // Text colors
        text: {
          primary: "#2E2E2E",    // Dark gray for primary text
          secondary: "#595959",  // Medium gray for secondary text
          muted: "#A0A0A0",      // Light gray for muted text
        },
        
        // Headings
        heading: {
          primary: "#1A1A1A", // Very dark gray for main headings
          secondary: "#343A40", // Darker gray for sub-headings
        },
        
        // Button colors
        button: {
          primary: "#0F4C81",  // Navy blue for primary buttons
          secondary: "#556A7F", // Slate blue for secondary buttons
          hover: "#094A70",    // Darker blue for button hover states
        },
        
        // Accent colors
        accent: {
          teal: "#5C9EAD",  // Soft teal for links or small accents
          rose: "#D88A9A",  // Dusty rose for subtle highlights
          bronze: "#CD7F32", // Bronze for icons or decorative elements
        },
        
        // Border colors
        border: {
          default: "#D1D5DB", // Light gray for borders
          accent: "#0F4C81",  // Navy blue for accent borders
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Replace with a preferred professional font
        serif: ["Merriweather", "serif"],
      }
    },
  },
  plugins: [],
};

