'use client';

import React, { useState, useEffect } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useAuth } from '@context/AuthContext';
import themeConfig from '@configs/app-config';
import GuestGuard from '@/core/components/auth/GuestGuard';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const { login, isAuthenticated, loading } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        login(email, password);
    };

    useEffect(() => {
        if (isAuthenticated) {
            router.push(themeConfig.defaultBaseRoute);
        }
    }, [isAuthenticated, router]);

    return (
        <GuestGuard>
            <Box component="form" sx={{ maxWidth: 400, mx: 'auto', mt: 25, px: 3 }}>
                <Typography variant="h4" sx={{ mb: 3 }}>Login</Typography>
                <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    margin="normal"
                    size='small'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    size='small'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            disabled={loading}
                        />
                    }
                    label="Remember Me"
                />
                <Button
                    fullWidth
                    size='large'
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    sx={{ mt: 2 }}
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </Button>
            </Box>
        </GuestGuard>
    );
};

LoginPage.guestGuard = true;

export default LoginPage;
