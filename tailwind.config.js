/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
        'terminal-glow': 'glowBorder 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowBorder: {
          '0%': {
            boxShadow: '0 0 10px rgba(147, 51, 234, 0.2)',
          },
          '100%': {
            boxShadow: '0 0 25px rgba(147, 51, 234, 0.4)',
          },
        },
      },
      width: {
        '1/8': '12.5%',
      },
      screens: {
        lg1000: '1000px',
      },
      colors: {
        terminalBg: '#111827',       // Optional: custom terminal background
        terminalText: '#10b981',     // Optional: neon green text
      },
    },
  },
  plugins: [],
};
