import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { routes } from "./account.routing";
import { OverviewComponent } from './profile/overview/overview.component';



@NgModule({
  declarations: [
    ProfileComponent,
    OverviewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AccountModule { }
