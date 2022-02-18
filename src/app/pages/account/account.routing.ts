import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/account/profile',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(x => x.ProfileModule),
    },
]