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
        mode: 'dark',
        primary: {
            light: '#82b1ff',
            main: '#2979ff',
            dark: '#2962ff',
            contrastText: '#FFF'
        },
        background: {
            default: '#121212',
            paper: '#121212',
        },
        text: {
            primary: '#FFFFFF',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.38)',
        },
        divider: `rgba(${mainColor}, 0.12)`,
        action: {
            hover: 'rgba(255, 255, 255, 0.08)',
            selected: 'rgba(255, 255, 255, 0.16)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            focus: 'rgba(255, 255, 255, 0.12)',
        },
    },
    typography: {
        fontFamily: `${inter.style.fontFamily}, ${myanmar.style.fontFamily}`,
        h1: {
            fontWeight: 700,
            fontSize: '2.2rem',
            color: '#FFFFFF',
        },
        h2: {
            fontWeight: 600,
            fontSize: '1.8rem',
            color: '#FFFFFF',
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.6rem',
            color: '#FFFFFF',
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.4rem',
            color: '#FFFFFF',
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.5rem',
            color: '#FFFFFF',
        },
        h6: {
            fontWeight: 500,
            fontSize: '1.2rem',
            color: '#FFFFFF',
        },
        body1: {
            fontWeight: 400,
            fontSize: '1rem',
            color: '#FFFFFF',
        },
        body2: {
            fontWeight: 400,
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)',
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: '1.2rem',
            color: '#FFFFFF',
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)',
        },
        caption: {
            fontWeight: 400,
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)',
        },
        overline: {
            fontWeight: 600,
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)',
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            color: '#FFFFFF',
        }
    },
    shape: {
        borderRadius: 12,
    },
    spacing: 8,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
                containedPrimary: {
                    backgroundColor: '#2979ff',
                    '&:hover': {
                        backgroundColor: '#2962ff',
                    }
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: '#1E1E1E',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1E1E1E',
                    color: '#FFFFFF',
                }
            }
        },
    }
});

export default darkTheme;
