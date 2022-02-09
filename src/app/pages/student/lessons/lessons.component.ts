import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ITableConfig } from 'src/app/core/interfaces/ITable';
import { lessonData } from 'src/app/core/mock/lessonData';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  data: any[] = [];
  // ---
  tableConfig: ITableConfig = {
    selectable: true,
    header: [
      {
        key: 'code',
        title: 'کد'
      },
      {
        key: 'lessonName',
        title: 'نام درس'
      },
      {
        key: 'teacherName',
        title: 'نام استاد'
      },
      {
        key: 'capacity',
        title: 'ظرفیت'
      },
      {
        key: 'price',
        title: 'قیمت'
      },
      {
        key: 'status',
        title: 'وضعیت'
      },
      {
        key: 'typeOfCourse',
        title: 'نوع کلاس'
      },
    ]
  }
  // ---
  constructor(
    private title: Title,
    private router: Router
  ) {
    title.setTitle('لیست دروس کاربر');
  }

  ngOnInit(): void {
    this.getData();
  }


  getData(): void {
    this.data = lessonData;
  }

  onClickRow(data: any) {
    this.router.navigateByUrl(`/student/lessons/${data.rowData.id}`);
  }

}
