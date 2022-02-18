import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileOverviewComponent } from './overview/overview.component';
import { ProfileSettingsComponent } from './settings/settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './profile.routing';
import { ProfileAuthenticationComponent } from './authentication/authentication.component';
import { ProfileWalletComponent } from './wallet/wallet.component';
import { MyClassesComponent } from './my-classes/my-classes.component';



@NgModule({
  declarations: [
    ProfileOverviewComponent,
    ProfileSettingsComponent,
    ProfileAuthenticationComponent,
    ProfileWalletComponent,
    MyClassesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ProfileModule { }
