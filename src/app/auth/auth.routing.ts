import { Routes } from "@angular/router";
import { AuthComponent } from "../shared/layout/auth/auth.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

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
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'forget',
                component: ForgetPasswordComponent
            }
        ]
    },
]