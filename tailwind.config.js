/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#D9D9D9",
                secondary: "#A7A7A7",
                light_purple: "#BC8FCC",
                icon: "#252525",
                secondary_text: "#747474",
                
                dark_primary: "#363636",
                dark_secondary: "#252525",
                dark_purple: "#A151BD",
                dark_secondary_text: "#AFAFAF",
                dark_icon: "#D9D9D9",

                online: "#44DD1D",
                busy: "#CE261B",
                absent: "#F2DB06",
                offline: "#959595",
            },
        },
    },
    plugins: [],
}