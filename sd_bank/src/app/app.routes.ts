import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./feature/login/login').then(m => m.Login),
    },
    {
        path: 'create-account',
        loadComponent: () => import('./feature/create-account/create-account').then(m => m.CreateAccount),
    },
    {
        path: 'balance',
        loadComponent: () => import('./feature/balance/balance').then(m => m.Balance),
    },
    {
        path: 'table',
        loadComponent: () => import('./feature/balance/table/table').then(m => m.Table),
    },
    {
        path: 'deposit',
        loadComponent: () => import('./feature/deposit/deposit').then(m => m.Deposit),
    },
    {
        path: 'withdrawal',
        loadComponent: () => import('./feature/withdrawal/withdrawal').then(m => m.Withdrawal),
    },
    {
        path: 'transfer',
        loadComponent: () => import('./feature/transfer/transfer').then(m => m.Transfer),
    },

];
