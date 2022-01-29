import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { educationData } from 'src/app/core/mock/educationData';

@Component({
  selector: 'app-education-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class EducationDetailComponent implements OnInit {
  courseId!: number;
  // ---
  courseDetail: any;
  // ---
  learnItems = [
    'ساخت صفحه splash screen',
    'آموزش کاربا appbarLayout و toolbar و recyclerView',
    'ست کردن View های مختلف با توجه به پارامترهای دریافت شده از سمت سرور',
    'ساخت دیتابیس در محیط Wampserver آموزش ارتباط mysql و php',
    'آموزش استفاده از asyncTask آموزش کاربا ProgressDialog',
    'آموزش ارتباط با سرور با کتابخانه httpclient',
    'آموزش ارسال اطلاعات به سرور',
    'آموزش لود کردن عکس با کتابخانه picasso',
    'آموزش دریافت اطلاعات از سرور در قالب json',
    'نمایش خطا در textInputLaout',
    'آموزش ساخت کلاس sharedPreferences برای ذخیره سازی اطلاعاتی مانند تنظیمات',
    'بررسی روش ست کردن onClickListener بروی RecyclerView و دریافت آیدی هر فیلم برای',
    'ساخت صفحه نمایش فیلم',
    'ساخت صفحه تنظیمات',
  ]
  // ---
  constructor(
    private activeRoute: ActivatedRoute,
  ) {
    if (this.activeRoute.snapshot && this.activeRoute.snapshot.params['courseId']) {
      this.courseId = +this.activeRoute.snapshot.params['courseId'];
    }
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    if (this.courseId) {
      const foundedItem = educationData.find(x => x.id === this.courseId);
      // ---
      if (foundedItem) {
        this.courseDetail = foundedItem;
      }
    }
  }

}
