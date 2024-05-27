'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Brightness4Icon from '@mui/icons-material/LightModeOutlined';
import Brightness7Icon from '@mui/icons-material/DarkModeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import Badge from '@mui/material/Badge';
import NotificationIcon from '@mui/icons-material/NotificationsOutlined';
import ExpandLess from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ChevronRight';
import { useAbility } from '@/core/context/AbilityContext'; // Update with correct path to AbilityContext
import { ThemeContext } from '@/core/context/ThemeContext'; // Update with correct path to ThemeContext
import navigation from '@/core/configs/navigations';
import appConfig from '@/core/configs/app-config';
import { NavigationItem } from '@/core/utils/types';
import { useAuth } from '../context/AuthContext';
import { deepOrange } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@components/LanguageSwitch';

const openedMixin = (theme: Theme): CSSObject => ({
  width: appConfig.drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: appConfig.drawerWidth,
    width: `calc(100% - ${appConfig.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: appConfig.drawerWidth,
    width: `calc(100% - ${appConfig.miniDrawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: appConfig.drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const UserInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  position: 'absolute',
  bottom: 0,
  width: '100%',
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const ListItemTextView = styled(ListItemText)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 500,
}));

export default function AppDrawer({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>({});
  const themeContext = React.useContext(ThemeContext);
  const ability = useAbility();
  const pathname = usePathname();
  const { logout, user } = useAuth();
  const { t } = useTranslation();

  if (!themeContext) {
    throw new Error('AppDrawer must be used within a ThemeContextProvider');
  }

  const { toggleTheme, mode } = themeContext;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggleGroup = (title: string) => {
    setOpenGroups((prevOpenGroups) => ({
      ...prevOpenGroups,
      [title]: !prevOpenGroups[title],
    }));
  };

  const renderNavigationItems = (items: NavigationItem[], depth = 0) => {
    return items.map((item) => {
      if (item.subject && ability.can('read', item.subject)) {

        if (!user?.org?.some((o: string) => item.org?.includes(o))) {
          return null;
        }

        const isActive = item.path && pathname.includes(item.path);

        const activeTabStyle = (isActive && (!item.children || (item.children && !open))) ? {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '& .MuiListItemIcon-root': {
            color: theme.palette.primary.contrastText,
          },
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '& .MuiListItemIcon-root': {
              color: theme.palette.primary.contrastText,
            },
          },
        } : {
          backgroundColor: 'transparent',
          color: theme.palette.text.primary,
          '& .MuiListItemIcon-root': {
            color: theme.palette.text.primary,
          },

        };

        return (
          <React.Fragment key={item.title}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                LinkComponent={item.children ? 'div' : Link}
                href={item.path}
                onClick={() => item.children && handleToggleGroup(item.title)}
                sx={{
                  minHeight: appConfig.listItemHeight,
                  justifyContent: open ? 'initial' : 'center',
                  pl: 0,
                  borderRadius: '8px',
                  margin: '4px 7px',
                  ...activeTabStyle,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    pl: 2,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon && <item.icon />}
                  {!item.icon && <appConfig.defaultNavIcon sx={{ fontSize: 8 }} />}
                </ListItemIcon>
                <ListItemTextView primary={t(`${item.title}`)} sx={{ opacity: open ? 1 : 0 }} />
                {item.children && open && (openGroups[item.title] ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>
            {item.children && (
              <Collapse in={(openGroups[item.title] && open)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {renderNavigationItems(item.children, depth + 1)}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        );
      }
      return null;
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={1}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge='start'
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            sx={{
              marginRight: 2,
            }}
          >
            {!open ? <MdOutlineKeyboardDoubleArrowRight /> : <MdOutlineKeyboardDoubleArrowLeft />}
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {appConfig.appName}
          </Typography>
          <LanguageSwitcher />
          &ensp;&ensp;
          {/* Toggle Theme */}
          <Tooltip title="Toggle Theme">
            <IconButton edge='end' color="inherit" onClick={toggleTheme}>
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Tooltip>
          &ensp;&ensp;&ensp;
          {/* Notifications */}
          <Tooltip title="Notifications">
            <IconButton edge='end' color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          &ensp;&ensp;&ensp;
          {/* Logout */}
          <Tooltip title="Logout">
            <IconButton edge='end' color="inherit" onClick={logout}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <List>
          {renderNavigationItems(navigation())}
        </List>
        <UserInfo>
          <Avatar alt={user?.username} src="/path-to-avatar.jpg" sx={{ bgcolor: deepOrange[400], mr: 2, ml: -0.5 }} />
          <Box>
            <Typography variant="h6" sx={{ fontSize: 16 }}>{user?.username}</Typography>
            <Typography variant="body2" color="textSecondary">
              {user?.email}
            </Typography>
          </Box>
        </UserInfo>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, pt: 2, px: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
