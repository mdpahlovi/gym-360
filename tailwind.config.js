/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "448px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1600px",
        },
        extend: {
            colors: {
                accent: "#FFE0B3",
                dark: "#0D0D0D",
                light: "#ffffff",
                lightGray: "#DFEDF2",
            },
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
    },
    plugins: [],
};
