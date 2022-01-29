import { NgModule } from '@angular/core';
import { EducationComponent } from './education/education.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { routes } from "./student.routing";
import { EducationItemComponent } from './education/item/item.component';
import { EducationFilterComponent } from './education/filter/filter.component';
import { EducationDetailComponent } from './education/detail/detail.component';


@NgModule({
  declarations: [
    EducationComponent,
    EducationItemComponent,
    EducationFilterComponent,
    EducationDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class StudentModule { }
