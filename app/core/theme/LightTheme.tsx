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
    },
    shape: {
        borderRadius: 10,
    }
});

export default darkTheme;
