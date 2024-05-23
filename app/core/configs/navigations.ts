import Dashboard from '@mui/icons-material/DashboardCustomizeOutlined';
import DonutSmall from '@mui/icons-material/Inventory2Outlined';
import Group from '@mui/icons-material/GroupOutlined';
import LocalShipping from '@mui/icons-material/LocalShippingOutlined';
import FileDownload from '@mui/icons-material/FileDownloadOutlined';
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';
import Settings from '@mui/icons-material/SettingsOutlined';
import Analytics from '@mui/icons-material/AnalyticsOutlined';
import { NavigationItem } from '@/core/utils/types';
import { useTranslation } from 'react-i18next';

const navigation = (): NavigationItem[] => {
    const { t } = useTranslation();

    return [
        {
            title: t('Dashboard'),
            icon: Dashboard,
            path: '/dashboard',
            subject: 'Dashboard',
            org: ['ORG-001']
        },
        {
            title: t('Orders'),
            icon: DonutSmall,
            subject: 'Order',
            org: ['ORG-001'],
            path: '/orders',
            children: [
                {
                    title: t('Order Entry'),
                    path: '/orders/entry',
                    subject: 'Order',
                },
                {
                    title: t('Order Tracking'),
                    path: '/orders/tracking',
                    subject: 'Order',
                    org: ['ORG-001'],
                },
                {
                    title: t('Order History'),
                    path: '/orders/history',
                    subject: 'Order',
                    org: ['ORG-001'],
                }
            ]
        },
        {
            title: t('Logistics'),
            icon: Group,
            subject: 'Logistic',
            org: ['ORG-001'],
            path: '/logistics',
            children: [
                {
                    title: t('Route Planning'),
                    path: '/logistics/route-planning',
                    subject: 'Logistic',
                    org: ['ORG-001'],
                },
                {
                    title: t('Fleet Management'),
                    path: '/logistics/fleet-management',
                    subject: 'Logistic',
                    org: ['ORG-001'],
                }
            ]
        },
        {
            title: t('Trucks'),
            icon: LocalShipping,
            subject: 'Truck',
            org: ['ORG-002', 'ORG-001'],
            path: '/trucks',
            children: [
                {
                    title: t('Truck List'),
                    path: '/trucks/list',
                    subject: 'Truck',
                    org: ['ORG-002', 'ORG-001'],
                },
                {
                    title: t('Truck Maintenance'),
                    path: '/trucks/maintenance',
                    subject: 'Truck',
                    org: ['ORG-001'],
                }
            ]
        },
        {
            title: t('Download CSV'),
            icon: FileDownload,
            path: '/download-csv',
            subject: 'Dashboard',
            org: ['ORG-002', 'ORG-001'],
        },
        {
            title: t('User Management'),
            icon: AccountCircle,
            subject: 'User',
            org: ['ORG-001'],
            path: '/user-management',
            children: [
                {
                    title: t('User List'),
                    path: '/user-management/user-list',
                    subject: 'User',
                    org: ['ORG-001'],
                },
                {
                    title: t('Roles & Permissions'),
                    path: '/user-management/roles-permissions',
                    subject: 'User',
                    org: ['ORG-001'],
                }
            ]
        },
        {
            title: t('Settings'),
            icon: Settings,
            subject: 'Settings',
            org: ['ORG-001'],
            path: '/settings',
            children: [
                {
                    title: t('General Settings'),
                    path: '/settings/general',
                    subject: 'Settings',
                    org: ['ORG-001'],
                },
                {
                    title: t('Profile Settings'),
                    path: '/settings/profile',
                    subject: 'Settings',
                    org: ['ORG-001'],
                }
            ]
        },
        {
            title: t('Analytics'),
            icon: Analytics,
            subject: 'Analytics',
            path: '/analytics',
            org: ['ORG-001'],
            children: [
                {
                    title: t('Sales Analytics'),
                    path: '/analytics/sales',
                    subject: 'Analytics',
                    org: ['ORG-001'],
                },
                {
                    title: t('Customer Analytics'),
                    path: '/analytics/customers',
                    subject: 'Analytics',
                    org: ['ORG-001'],
                }
            ]
        }
    ]
}

export default navigation;
