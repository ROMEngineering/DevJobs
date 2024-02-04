/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./commonComponents/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "general-header":
                    "url('/assets/desktop/bg-pattern-detail-footer.svg')",
            },
        },
    },
    plugins: [],
};
