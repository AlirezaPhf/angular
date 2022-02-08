import { Routes } from "@angular/router";
import { EducationDetailComponent } from "./education/detail/detail.component";
import { EducationComponent } from "./education/education.component";
import { LessonsComponent } from "./lessons/lessons.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/student/education',
        pathMatch: 'full'
    },
    {
        path: 'education',
        component: EducationComponent
    },
    {
        path: 'education/:courseId',
        component: EducationDetailComponent
    },
    {
        path: 'lessons',
        component: LessonsComponent
    }
]