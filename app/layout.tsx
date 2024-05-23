'use client';

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@utils/i18n';
import WindowWrapper from '@layouts/WindowWrapper';
import { ToastProvider } from '@context/ToastContext';
import { AuthProvider } from '@context/AuthContext';
import themeConfig from '@configs/app-config';
import ThemeContextProvider from '@context/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';


const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{themeConfig.appName}</title>
      </head>
      <body>

        <I18nextProvider i18n={i18n}>
          <ThemeContextProvider>

            <CssBaseline />
            <ToastProvider>
              <AuthProvider>
                <WindowWrapper>
                  {children}
                </WindowWrapper>
              </AuthProvider>
            </ToastProvider>
          </ThemeContextProvider>
        </I18nextProvider>
      </body>
    </html>
  );
};

export default RootLayout;