import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './partials/aside/aside.component';
import { MainMenuComponent } from './partials/main-menu/main-menu.component';
import { SubMenuComponent } from './partials/sub-menu/sub-menu.component';
import { MainLayoutComponent } from './layout/main/main.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { RouterModule } from '@angular/router';
import { CustomToolbarComponent } from './custom-toolbar/custom-toolbar.component';
import { CustomFilterComponent } from './custom-filter/custom-filter.component';
import { CustomStarComponent } from './custom-star/custom-star.component';
import { AuthComponent } from './layout/auth/auth.component';



@NgModule({
  declarations: [
    AsideComponent,
    MainMenuComponent,
    SubMenuComponent,
    MainLayoutComponent,
    CustomCardComponent,
    CustomToolbarComponent,
    CustomFilterComponent,
    CustomStarComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    CustomCardComponent,
    CustomToolbarComponent,
    CustomFilterComponent,
    CustomStarComponent,
    AsideComponent,
    MainLayoutComponent
  ]
})
export class SharedModule { }
