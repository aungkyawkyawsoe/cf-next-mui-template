'use client';

import AuthGuard from '@/core/components/auth/AuthGuard';
import Spinner from '@/core/components/Spinner';
import Typography from '@mui/material/Typography';
import React from 'react'

const OrderTracking = () => {
    return (
        <AuthGuard fallback={<Spinner />}>
            <Typography variant="h5">Order Tracking</Typography>
        </AuthGuard>
    )
}

export default OrderTracking
