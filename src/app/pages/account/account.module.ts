import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { routes } from "./account.routing";



@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AccountModule { }
