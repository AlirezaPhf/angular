import { Routes } from "@angular/router";
import { MainLayoutComponent } from "../shared/layout/main/main.component";

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'account',
                loadChildren: () => import('./account/account.module').then(x => x.AccountModule),
            },
            {
                path: 'student',
                loadChildren: () => import('./student/student.module').then(x => x.StudentModule),
            },
            {
                path: 'teacher',
                loadChildren: () => import('./teacher/teacher.module').then(x => x.TeacherModule),
            }
        ]
    },
]