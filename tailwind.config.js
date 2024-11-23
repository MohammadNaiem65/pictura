/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'edu-au-vic': ['Edu AU VIC WA NT Arrows', 'sans-serif'],
                oswald: ['Oswald', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
