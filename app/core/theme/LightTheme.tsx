'use client';

import { createTheme } from '@mui/material/styles';
import { Inter, Noto_Sans_Myanmar } from 'next/font/google';

const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    fallback: ['Padauk'],
    display: 'swap',
});

const myanmar = Noto_Sans_Myanmar({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['myanmar'],
    display: 'swap',
});

const mainColor = '76, 78, 100';

const darkTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#353b48',
            main: '#353b48',
            dark: '#353b48',
            contrastText: '#FFF'
        },
        text: {
            primary: `rgba(${mainColor}, 0.87)`,
            secondary: `rgba(${mainColor}, 0.68)`,
            disabled: `rgba(${mainColor}, 0.38)`
        },
        divider: `rgba(${mainColor}, 0.12)`,
    },
    typography: {
        fontFamily: `${inter.style.fontFamily}, ${myanmar.style.fontFamily}`,
        h1: {
            fontWeight: 700,
            fontSize: '2.2rem',

        },
        h2: {
            fontWeight: 600,
            fontSize: '1.8rem',

        },
        h3: {
            fontWeight: 600,
            fontSize: '1.6rem',

        },
        h4: {
            fontWeight: 600,
            fontSize: '1.4rem',

        },
        h5: {
            fontWeight: 500,
            fontSize: '1.5rem',

        },
        h6: {
            fontWeight: 500,
            fontSize: '1.2rem',

        },
        subtitle1: {
            fontWeight: 500,
            fontSize: '1rem',

        },
        subtitle2: {
            fontWeight: 500,
            fontSize: '0.9rem',

        },
        body1: {
            fontWeight: 400,
            fontSize: '1rem',

        },
        body2: {
            fontWeight: 400,
            fontSize: '0.9rem',

        },
        caption: {
            fontWeight: 400,
            fontSize: '0.8rem',

        },
        overline: {
            fontWeight: 600,
            fontSize: '0.8rem',

        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '1rem',

        }
    },
    shape: {
        borderRadius: 10,
    }
});

export default darkTheme;
