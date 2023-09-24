/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "neutral-50": "#f9f9f9",
        "neutral-400": "#a2a2a2",
        "neutral-1000": "#000",
        "gray":"rgba(255,255,255,0.12)",
        "neutral-950":"#0a0a0a",
        "neutral-900": "#171717",
        "neutral-800": "#262626",
        "neutral-700": "#404040",
        "neutral-500": "#737373",
        "neutral-300": "#d3d3d3",
        "neutral-200": "#E4E4E4",
        "neutral-100": "#f4f4f4",
        "red-error":"#8b14a",
        "green-success":"#00be74",
        "card-fill":"#16181c",
        "searchbar-fill":"#212327",
        "blue-wash":"rgba(117,190,239,0.2)",
        "twitterblue":"#1D9BF0",
        "buttonstroke":"#546a7a",
        "stroke": "#1d9bf03d",
        "postblue": "#1871CA",
        "twitterwhite-100": "#FFFFFF",
        "bluecus":"#40596A"
        


    },

    fontFamily:{ 
      "px-regular" : "Inter",
      sans: [
        "Inter var, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"  "clig" off "liga" off',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },

    fontSize:{
      base: "1rem",
      "5xl":"1.5rem",
      inherit:"inherit",
      "bold":"48px",

    },

    spacing:{
     
    },

    strokeWidth:{
      '1.5': '1.5px',
    
    },

    borderRadius:{
      'normal': '65px',
      'n1':'30px',
      'xl1':'9999px'
    },

    boxShadow:{
      '3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
    },

    width:{
      '1920': '120rem',
    },
    height:{
      '1080': '67.5rem',
    },

  },
  plugins: [],
}

}
