module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
=======
=======
>>>>>>> develop
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                light: { raw: "(prefers-color-scheme: light)" },
                dark: { raw: "(prefers-color-scheme: light)" }
            }
        },
        // fontFamily: {
        //     'sans': ['Roboto', 'sans-serif'],
        //     'serif': ['sans-serif', 'ui-serif', 'Georgia'],
        //     'mono': ['ui-monospace', 'SFMono-Regular'],
        //     'display': ['Roboto', 'sans-serif'],
        //     'body': ['Roboto', 'sans-serif'],
        // }
    },
    variants: {
        extend: {},
    },
    plugins: [
        function({ addBase, config }) {
            addBase({
                body: {
                    color: config("theme.colors.black"),
                    backgroundColor: config("theme.colors.white")
                },
                "@screen dark": {
                    body: {
                        color: config("theme.colors.white"),
                        backgroundColor: config("theme.colors.black")
                    }
                }
            });
        }
    ],
<<<<<<< HEAD
}
>>>>>>> develop
=======
}
>>>>>>> develop
