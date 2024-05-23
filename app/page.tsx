'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import appConfig from './core/configs/app-config';
import FallbackSpinner from './core/components/Spinner';

const HomePage = () => {
    const pathname = usePathname()
    const router = useRouter()
    useEffect(() => {
        if (pathname === '/') {
            router.push(appConfig.defaultBaseRoute)
        }
    }, [pathname, router]);

    return (
        <>
            <FallbackSpinner />
        </>
    )
}

export default HomePage
