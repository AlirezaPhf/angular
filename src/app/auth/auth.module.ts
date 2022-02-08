import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from "./auth.routing";
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { TwoStepComponent } from './two-step/two-step.component';
import { RegisterTypeComponent } from './register/register-type/register-type.component';
import { RegisterEnterMobileComponent } from './register/register-enter-mobile/register-enter-mobile.component';
import { RegisterMobileConfirmComponent } from './register/register-mobile-confirm/register-mobile-confirm.component';
import { RegisterUserInfoComponent } from './register/register-user-info/register-user-info.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    TwoStepComponent,
    RegisterTypeComponent,
    RegisterEnterMobileComponent,
    RegisterMobileConfirmComponent,
    RegisterUserInfoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AuthModule { }
