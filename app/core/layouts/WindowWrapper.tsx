'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useAuth } from '@/core/context/AuthContext';
import { AbilityProvider } from '@/core/context/AbilityContext';
import AppDrawer from '@/core/layouts/AppDrawer';
import { usePathname } from 'next/navigation';
import FallbackSpinner from '../components/Spinner';
import { useTheme } from '../context/ThemeContext';

const WindowWrapper = ({ children }: any) => {
    const { isAuthenticated, user } = useAuth();
    const { mode } = useTheme();

    const pathname = usePathname()
    const [windowReadyFlag, setWindowReadyFlag] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowReadyFlag(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    if (windowReadyFlag) {
        return (
            <Box bgcolor={mode == 'dark' ? '#212121' : '#fff'} height="100vh">
                <AbilityProvider user={user}>
                    {isAuthenticated ? (
                        <AppDrawer>{children}</AppDrawer>
                    ) : (
                        <>{children}</>
                    )}
                </AbilityProvider>
            </Box>
        )
    } else {
        return (
            <FallbackSpinner />
        );
    }
};

export default WindowWrapper;
