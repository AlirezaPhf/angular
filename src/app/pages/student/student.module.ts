import { NgModule } from '@angular/core';
import { EducationComponent } from './education/education.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { routes } from "./student.routing";
import { EducationItemComponent } from './education/item/item.component';
import { EducationFilterComponent } from './education/filter/filter.component';
import { EducationDetailComponent } from './education/detail/detail.component';
import { LessonsComponent } from './lessons/lessons.component';
import { StudentScheduleComponent } from './lessons/schedule/schedule.component';
import { LessonDetailComponent } from './lessons/detail/detail.component';
import { LessonAddNewScheduleDgComponent } from './lessons/detail/add-new-schedule-dg/add-new-schedule-dg.component';
import { LessonAddNewUserDgComponent } from './lessons/detail/add-new-user-dg/add-new-user-dg.component';


@NgModule({
  declarations: [
    EducationComponent,
    EducationItemComponent,
    EducationFilterComponent,
    EducationDetailComponent,
    LessonsComponent,
    StudentScheduleComponent,
    LessonDetailComponent,
    LessonAddNewScheduleDgComponent,
    LessonAddNewUserDgComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class StudentModule { }
