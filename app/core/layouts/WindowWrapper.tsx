'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/core/context/AuthContext';
import { AbilityProvider } from '@/core/context/AbilityContext';
import AppDrawer from '@/core/layouts/AppDrawer';
import { usePathname } from 'next/navigation';
import FallbackSpinner from '../components/Spinner';

const WindowWrapper = ({ children }: any) => {
    const { isAuthenticated, user } = useAuth();
    const pathname = usePathname()
    const [windowReadyFlag, setWindowReadyFlag] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowReadyFlag(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    if (windowReadyFlag) {
        return <AbilityProvider user={user}>
            {isAuthenticated ? (
                <AppDrawer>{children}</AppDrawer>
            ) : (
                <>{children}</>
            )}
        </AbilityProvider>
    } else {
        return <FallbackSpinner />
    }
};

export default WindowWrapper;
