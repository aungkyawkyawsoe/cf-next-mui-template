import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@context/AuthContext';
import FallbackSpinner from '../Spinner';

interface GuestGuardProps {
    children: ReactNode;
    fallback?: ReactNode;
}

const GuestGuard: React.FC<GuestGuardProps> = ({ children, fallback }) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, loading, router]);

    if (loading) {
        return <>{fallback ?? <FallbackSpinner />}</>;
    }

    if (isAuthenticated) {
        return <>{fallback ?? <FallbackSpinner />}</>;
    }

    return <>{children}</>;
};

export default GuestGuard;
