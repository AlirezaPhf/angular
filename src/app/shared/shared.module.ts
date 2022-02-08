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
import { CustomTableComponent } from './custom-table/custom-table.component';
import { RegisterLayoutComponent } from './layout/register-layout/register-layout.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from '../core/adapter/material.persian-date.adapter';
import { IncludeTextPipe } from './pipe/include-text.pipe';


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
    AuthComponent,
    CustomTableComponent,
    RegisterLayoutComponent,
    IncludeTextPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDatepickerModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    CustomCardComponent,
    CustomToolbarComponent,
    CustomFilterComponent,
    CustomStarComponent,
    CustomTableComponent,
    AsideComponent,
    MainLayoutComponent,
    MatDatepickerModule,
    MatInputModule,
    IncludeTextPipe
  ],
  providers: [
    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS }
  ]
})
export class SharedModule { }
