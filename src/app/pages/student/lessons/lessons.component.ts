import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ITableConfig } from 'src/app/core/interfaces/ITable';

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
    private title: Title
  ) {
    title.setTitle('لیست دروس کاربر');
  }

  ngOnInit(): void {
    this.getData();
  }


  getData(): void {
    this.data = [
      {
        code: '01',
        confirmation: false,
        lessonName: 'ریاضی 1',
        teacherName: 'آقای امیر محمد حفار',
        capacity: '4',
        status: 'درحال برگزاری',
        typeOfCourse: 'حضوری',
        price: '290000', scoin: '2',
        numberOfSessions: '10',
        numberOfHeld: '2',
        grossProfit: '',
        teachingRights: '',
        interestRates: '',
        netProfit: '',
        depositTeacher: '',
        schedule: [{ day: 'شنبه', time: '8 تا 10' }, { day: 'شنبه', time: '14 تا 16' }, { day: 'یک شنبه', time: '12 تا 13' }, { day: 'پنج شنبه', time: '10 تا 12' }],
        students: [{ nCode: '0923687602', scoreLesson: '20', scoreTeacher: '20', numberOfAbsences: '0' }]
      },
      {
        code: '02',
        confirmation: false,
        lessonName: 'زبان انگلیسی',
        teacherName: 'خانوم امیر گیلکی',
        capacity: '3',
        status: 'ارائه شده',
        typeOfCourse: 'آنلاین',
        price: '300000', scoin: '3',
        numberOfSessions: '15',
        numberOfHeld: '3',
        grossProfit: '',
        teachingRights: '',
        interestRates: '',
        netProfit: '',
        depositTeacher: '',
        schedule: [{ day: 'شنبه', time: '8 تا 10' }, { day: 'سه شنبه', time: '14 تا 16' }],
        students: [{ nCode: '0923687602', scoreLesson: '20', scoreTeacher: '20', numberOfAbsences: '0' }]
      },
      {
        code: '03',
        confirmation: true,
        lessonName: 'زبان عربی',
        teacherName: 'خانوم طباطبایی',
        capacity: '5',
        status: 'درحال برگزاری',
        typeOfCourse: 'آنلاین',
        price: '80000',
        scoin: '5',
        numberOfSessions: '20',
        numberOfHeld: '2',
        grossProfit: '240000',
        teachingRights: '200000',
        interestRates: '17',
        netProfit: '40000',
        depositTeacher: '150000',
        schedule: [{ day: 'سه شنبه', time: '14 تا 16' }],
        students: [{ nCode: '0923687602', scoreLesson: '20', scoreTeacher: '20', numberOfAbsences: '0' }]
      },
    ]
  }

}
