module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme:{
      screens: {
        // NEW
        xs: "0px",
        sm: "361px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors:{
        softred:"#fe7867",
        yellow:"#fad400",
        darkdesaturatedblue:"#23303e",
        desaturatedcyan:"#25564b",
        darkblue:"#19536b",
        darkmoderatecyan:"#458c7e",
        verydarkgrayishblue:"#5a636c",
        darkgrayishblue:"#818498",
        grayishblue:"#a7abae",
        white:"#ffffff",
        black:"#000000"
      },
      
    extend: {
      fontFamily: {
        'barlow': ['Barlow','sans-serif'],
        "fraunces":['Fraunces','serif']
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
