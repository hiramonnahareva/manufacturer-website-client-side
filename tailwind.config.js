module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
      themes: [
        {
          mytheme: {
          
            "primary": "#b34700",
          
            "secondary": "#F000B8",
                     
            "accent": "#ffe0cc",
                     
            "neutral": "#ffd6cc",
                     
            "base-100": "#FFFFFF",
                     
            "info": "#3ABFF8",
                     
            "success": "#36D399",
                     
            "warning": "#FBBD23",
                     
            "error": "#F87272",
          },
        },
      ],
    },
    plugins: [
      require('daisyui'),
    ],
}
