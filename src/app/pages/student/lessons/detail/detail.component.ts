import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ITableConfig } from 'src/app/core/interfaces/ITable';
import { lessonData } from 'src/app/core/mock/lessonData';
import { LessonAddNewScheduleDgComponent } from './add-new-schedule-dg/add-new-schedule-dg.component';
import { LessonAddNewUserDgComponent } from './add-new-user-dg/add-new-user-dg.component';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class LessonDetailComponent implements OnInit {
  itemData: any;
  // ---
  lessonId!: number;
  // ---
  tableConfig: ITableConfig = {
    selectable: false,
    header: [
      {
        key: 'name',
        title: 'نام'
      },
      {
        key: 'family',
        title: 'نام خانوادگی'
      },
      {
        key: 'age',
        title: 'سن'
      },
      {
        key: 'score',
        title: 'نمره درس'
      },
      {
        key: 'absentCount',
        title: 'تعداد جلسات غایب'
      },
    ]
  }
  // ---
  form!: FormGroup;
  // ---
  constructor(
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
    private fb: FormBuilder,
  ) {
    if (this.activeRoute.snapshot && this.activeRoute.snapshot.params['lessonId']) {
      this.lessonId = +this.activeRoute.snapshot.params['lessonId'];
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.getData();
  }

  createForm() {
    this.form = this.fb.group({
      code: [],
      lessonName: [],
      teacherName: [],
      scoin: [],
      status: [],
      typeOfCourse: [],
      numberOfSessions: [],
    })
  }

  getData() {
    if (this.lessonId) {
      const foundedItem = lessonData.find(x => x.id === this.lessonId);
      // ---
      if (foundedItem) {
        this.itemData = foundedItem;
        this.form.patchValue(foundedItem);
      }
    }
  }

  openDialog(dialogName: string) {
    this.dialog.open(dialogName === 'addUser' ? LessonAddNewUserDgComponent : LessonAddNewScheduleDgComponent, {
      width: '450px'
    });
  }

}
