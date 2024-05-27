import Dashboard from '@mui/icons-material/DashboardCustomizeOutlined';
import DonutSmall from '@mui/icons-material/Inventory2Outlined';
import Group from '@mui/icons-material/GroupOutlined';
import LocalShipping from '@mui/icons-material/LocalShippingOutlined';
import FileDownload from '@mui/icons-material/FileDownloadOutlined';
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';
import Settings from '@mui/icons-material/SettingsOutlined';
import Analytics from '@mui/icons-material/AnalyticsOutlined';
import { NavigationItem } from '@/core/utils/types';

const navigation = (): NavigationItem[] => {

    return [
        {
            title: 'Dashboard',
            icon: Dashboard,
            path: '/dashboard',
            subject: 'Dashboard',
            org: ['ORG-001']
        },
        {
            title: 'Orders',
            icon: DonutSmall,
            subject: 'Order',
            org: ['ORG-001'],
            path: '/orders',
            children: [
                {
                    title: 'Order Entry',
                    path: '/orders/entry',
                    subject: 'Order',
                },
                {
                    title: 'Order Tracking',
                    path: '/orders/tracking',
                    subject: 'Order',
                    org: ['ORG-001'],
                },
                {
                    title: 'Order History',
                    path: '/orders/history',
                    subject: 'Order',
                    org: ['ORG-001'],
                }
            ]
        },
        {
            title: 'Logistics',
            icon: Group,
            subject: 'Logistic',
            org: ['ORG-001'],
            path: '/logistics',
            children: [
                {
                    title: 'Route Planning',
                    path: '/logistics/route-planning',
                    subject: 'Logistic',
                    org: ['ORG-001'],
                },
                {
                    title: 'Fleet Management',
                    path: '/logistics/fleet-management',
                    subject: 'Logistic',
                    org: ['ORG-001'],
                }
            ]
        },
        {
            title: 'Trucks',
            icon: LocalShipping,
            subject: 'Truck',
            org: ['ORG-002', 'ORG-001'],
            path: '/trucks',
            children: [
                {
                    title: 'Truck List',
                    path: '/trucks/list',
                    subject: 'Truck',
                    org: ['ORG-002', 'ORG-001'],
                },
                {
                    title: 'Truck Maintenance',
                    path: '/trucks/maintenance',
                    subject: 'Truck',
                    org: ['ORG-001'],
                }
            ]
        },
        {
            title: 'Download CSV',
            icon: FileDownload,
            path: '/download-csv',
            subject: 'Dashboard',
            org: ['ORG-002', 'ORG-001'],
        },
        {
            title: 'User Management',
            icon: AccountCircle,
            subject: 'User',
            org: ['ORG-001'],
            path: '/user-management',
            children: [
                {
                    title: 'User List',
                    path: '/user-management/user-list',
                    subject: 'User',
                    org: ['ORG-001'],
                },
                {
                    title: 'Roles & Permissions',
                    path: '/user-management/roles-permissions',
                    subject: 'User',
                    org: ['ORG-001'],
                }
            ]
        },
        {
            title: 'Settings',
            icon: Settings,
            subject: 'Settings',
            org: ['ORG-001'],
            path: '/settings',
            children: [
                {
                    title: 'General Settings',
                    path: '/settings/general',
                    subject: 'Settings',
                    org: ['ORG-001'],
                },
                {
                    title: 'Profile Settings',
                    path: '/settings/profile',
                    subject: 'Settings',
                    org: ['ORG-001'],
                }
            ]
        },
        {
            title: 'Analytics',
            icon: Analytics,
            subject: 'Analytics',
            path: '/analytics',
            org: ['ORG-001'],
            children: [
                {
                    title: 'Sales Analytics',
                    path: '/analytics/sales',
                    subject: 'Analytics',
                    org: ['ORG-001'],
                },
                {
                    title: 'Customer Analytics',
                    path: '/analytics/customers',
                    subject: 'Analytics',
                    org: ['ORG-001'],
                }
            ]
        }
    ]
}

export default navigation;
