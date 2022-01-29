import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/account/profile',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
]