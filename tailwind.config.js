/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: "class",
    mode: "jit",
    content: [
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        "text-secondary_text",
        "bg-secondary_text",
        "text-busy",
        "bg-busy",
        "text-medium_security",
        "bg-medium_security",
        "text-success",
        "bg-success",
        "bg-offline",
        "bg-absent",
        "bg-light_purple",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#EEEEEE",
                secondary: "#888888",
                light_purple: "#BC8FCC",
                icon: "#252525",
                secondary_text: "#3F3F3F",
                light_green: "#68CA8F",
                light_blue: "#89C0E8",

                dark_primary: "#363636",
                dark_secondary: "#252525",
                dark_purple: "#A151BD",
                dark_secondary_text: "#AFAFAF",
                dark_icon: "#D9D9D9",
                dark_green: "#33B266",
                dark_blue: "#4595CF",

                online: "#44DD1D",
                busy: "#CE261B",
                absent: "#F2DB06",
                offline: "#959595",

                success: "#5CAF47",
                medium_security: "#E7A018",
            },
        },
        keyframes: {
            change: {
                "0%": { "margin-top": "0" },
                "15%": { "margin-top": "0" },
                "25%": { "margin-top": "-40px" },
                "40%": { "margin-top": "-40px" },
                "50%": { "margin-top": "-80px" },
                "65%": { "margin-top": "-80px" },
                "75%": { "margin-top": "-40px" },
                "85%": { "margin-top": "-40px" },
                "100%": { "margin-top": "0" },
            },
        },
        animation: {
            change: "6s linear 0s normal none infinite change",
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
}
