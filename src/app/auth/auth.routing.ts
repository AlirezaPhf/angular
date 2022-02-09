import { Routes } from "@angular/router";
import { AuthComponent } from "../shared/layout/auth/auth.component";
import { RegisterLayoutComponent } from "../shared/layout/register-layout/register-layout.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { LoginComponent } from "./login/login.component";
import { RegisterEnterMobileComponent } from "./register/register-enter-mobile/register-enter-mobile.component";
import { RegisterMobileConfirmComponent } from "./register/register-mobile-confirm/register-mobile-confirm.component";
import { RegisterTypeComponent } from "./register/register-type/register-type.component";
import { RegisterUserInfoComponent } from "./register/register-user-info/register-user-info.component";

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'forget',
                component: ForgetPasswordComponent
            }
        ]
    },
    {
        path: 'register',
        component: RegisterLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/auth/register/type',
                pathMatch: 'full'
            },
            {
                path: 'type',
                component: RegisterTypeComponent
            },
            {
                path: 'mobile',
                component: RegisterEnterMobileComponent
            },
            {
                path: 'confirm',
                component: RegisterMobileConfirmComponent
            },
            {
                path: 'info',
                component: RegisterUserInfoComponent
            }
        ]
    }
]