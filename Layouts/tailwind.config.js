/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'navy': '#2C2348',
        'yellow': '#DEE342',
        'black': '#161B00',
        'black-b1': '#131313',
        'white':'#FFFFFF',
        'black-text':'#000000',
        'twitter-blue': '#1D9BF0',
        'neutral/1000' : '#000000',
        'neutral/50' : '#F9F9F9',
        'neutral/700' : '#404040',
        'stroke1': '#1d9bf03d',
        'stroke2': '#FFFFFF3D',
        'line': '#404040',
        

      },
      borderRadius: {
        'ct': '48.75px',
      },
      blur : {
        'bt': '17.75px',
      },
      width :{
        '262' : '16.406rem',
    },

    boxShadow:{
      '3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
    },
  
  }
  
},
  plugins: [],
}

