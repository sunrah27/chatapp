/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            minWidth: {
                '128': '32rem',
            }
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")],
}