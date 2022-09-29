tailwind.config = {
    theme: {
        fontFamily: {
            'sans': ['League Spartan', 'sans-serif'],
        },
        colors: {
            'white': 'hsl(0, 0%, 100%)',
            'gray-dark': 'hsl(0, 0%, 63%)',
            'gray-very-dark': 'hsl(0, 0%, 27%)',
            'black' : 'hsl(0, 0%, 0%)',

        },
        extend: {
            fontSize: {
                xxs: '0.625rem'
            }
        },
        animation: {
            'fade': 'fade 600ms ease-out',
        },
        keyframes: {
            'fade': {
                '0%': { opacity: '0%', transform: 'scale(1.025)'},
                '100%': { opacity: '100%', transform: 'scale(1)'}
            }
        }
    }
}