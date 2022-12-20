module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
      themes: [
        {
          mytheme: {
          
            "primary": "#008ef5",
          
            "secondary": "#001e6c",
                     
            "accent": "#e9eaeb",
                     
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
