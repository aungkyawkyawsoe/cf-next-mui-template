'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#9c88ff',
        },
        background: {
            default: '#121212',
        },
    },
    typography: {
        fontFamily: inter.style.fontFamily,
    },
    shape: {
        borderRadius: 10,
    }
});

export default darkTheme;
