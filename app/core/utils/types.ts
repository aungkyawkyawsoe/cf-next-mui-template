import { MongoAbility } from "@casl/ability";

export interface Order {
    id: string;
    organizationId: string;
    // other fields
}

export interface Logistic {
    id: string;
    organizationId: string;
    // other fields
}

export interface Truck {
    id: string;
    organizationId: string;
    // other fields
}

// For Ability
export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';

export type AllSubjects = 'Order' | 'Logistic' | 'Truck' | 'Dashboard' | 'User' | 'Settings' | 'Analytics' | 'all';

export type Subjects = AllSubjects | Order | Logistic | Truck;

export type AppAbility = MongoAbility<[Actions, Subjects]>;

// For Navigation
export interface NavigationItem {
    title: string;
    icon?: React.ElementType;
    path: string;
    subject: Subjects;
    org?: string[];
    children?: NavigationItem[];
}

// For User Type
export interface User {
    email: string;
    role: string;
    org: string[];
}

export interface HotToastMessage {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

// For User Authentication
export interface AuthState {
    user: User | null;
    loading: boolean;
    message: HotToastMessage | null;
    isAuthenticated: boolean;
}