import { Routes } from "@angular/router";
import { ProfileLayoutComponent } from "src/app/shared/layout/profile-layout/profile-layout.component";
import { ProfileAuthenticationComponent } from "./authentication/authentication.component";
import { ProfileOverviewComponent } from "./overview/overview.component";
import { ProfileSettingsComponent } from "./settings/settings.component";
import { ProfileWalletComponent } from "./wallet/wallet.component";

export const routes: Routes = [
    {
        path: '',
        component: ProfileLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/account/profile/overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                component: ProfileOverviewComponent
            },
            {
                path: 'settings',
                component: ProfileSettingsComponent
            },
            {
                path: 'authentication',
                component: ProfileAuthenticationComponent
            },
            {
                path: 'wallet',
                component: ProfileWalletComponent
            },
        ]
    },
]