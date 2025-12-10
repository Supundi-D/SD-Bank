import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./feature/login/login').then(m => m.Login),
    },
    {
        path: 'create',
        loadChildren: () => import('./feature/create-account/create-account').then(m => m.CreateAccount),
    },
    {
        path: 'deposit',
        loadChildren: () => import('./feature/deposit/deposit').then(m => m.Deposit),
    },
    {
        path: 'withdrawal',
        loadChildren: () => import('./feature/withdrawal/withdrawal').then(m => m.Withdrawal),
    },

];
