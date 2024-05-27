import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem, IconButton, Tooltip } from '@mui/material';
import { IoMdGlobe } from 'react-icons/io';
import Image from 'next/image';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            i18n.changeLanguage(window.localStorage.getItem('i18nextLng') || 'en');
        }
    }, [i18n]);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('i18nextLng', lng);
        }
        handleClose();
    };

    return (
        <div>
            <Tooltip title="Change Language">
                <IconButton
                    aria-label="change language"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <IoMdGlobe />
                </IconButton>
            </Tooltip>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                elevation={3}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => changeLanguage('en')}>
                    <Image alt="English" style={{ borderRadius: 2 }} width={25} height={16} src="/us.png" />
                    &ensp;
                    English
                </MenuItem>
                <MenuItem onClick={() => changeLanguage('my')}>
                    <Image alt="Myanmar" style={{ borderRadius: 2 }} width={25} height={16} src="/my.png" />
                    &ensp;
                    Myanmar
                </MenuItem>
            </Menu>
        </div>
    );
};

export default LanguageSwitcher;
