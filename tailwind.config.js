/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/common/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                zallord: "Zallord",
            },
            fontSize: {
                "12xl": "12rem",
                "14xl": "14rem",
                "16xl": "16rem",
            },
            height: {
                nav: "80px",
                fscreen: "calc(100vh - 80px)",
            },
            colors: {
                "off-black": "#1E1C1C",
            },
        },
    },
    plugins: [],
};
