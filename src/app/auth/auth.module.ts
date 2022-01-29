import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from "./auth.routing";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { TwoStepComponent } from './two-step/two-step.component';



@NgModule({
  declarations: [

  
    LoginComponent,
        RegisterComponent,
        ForgetPasswordComponent,
        TwoStepComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AuthModule { }
