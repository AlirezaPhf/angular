import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class StudentScheduleComponent implements OnInit {
  studentSchedule = [
    {
      name: 'شنبه',
      nameEn: 'Saturday',
      lessons: [
        {
          name: 'ریاضی 1',
          teacherName: 'علیرضا پرستار',
          start: 8,
          end: 10
        },
        {
          name: 'ریاضی 1',
          teacherName: 'علیرضا پرستار',
          start: 14,
          end: 16
        },
        {
          name: 'زبان انگلیسی',
          teacherName: 'علیرضا پرستار',
          start: 18,
          end: 20
        }
      ]
    },
    {
      name: 'یکشنبه',
      nameEn: 'Sunday',
      lessons: [
        {
          name: 'ریاضی 1',
          teacherName: 'علیرضا پرستار',
          start: 12,
          end: 14
        }
      ]
    },
    {
      name: 'دوشنبه',
      nameEn: 'Monday',
      lessons: []
    },
    {
      name: 'سه‌شنبه',
      nameEn: 'Tuesday',
      lessons: [
        {
          name: 'زبان انگلیسی',
          teacherName: 'علیرضا پرستار',
          start: 14,
          end: 16
        },
        {
          name: 'زبان عربی',
          teacherName: 'علیرضا پرستار',
          start: 16,
          end: 18
        }
      ]
    },
    {
      name: 'چهارشنبه',
      nameEn: 'Wednesday',
      lessons: []
    },
    {
      name: 'پنج‌شنبه',
      nameEn: 'Thursday',
      lessons: [
        {
          name: 'فیزیک',
          teacherName: 'علیرضا پرستار',
          start: 16,
          end: 18
        }
      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
