import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-layout',
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.scss']
})
export class RegisterLayoutComponent implements OnInit {
  stepItems = [
    {
      route: 'type',
      title: 'نوع کاربری',
      description: 'نوع کاربری خودرا انتخاب نمایید'
    },
    {
      route: 'mobile',
      title: 'شماره موبایل',
      description: 'وارد کردن شماره موبایل'
    },
    {
      route: 'confirm',
      title: 'تایید شماره موبایل',
      description: 'تایید نمایید شماره وارد شده متعلق به شماست'
    },
    {
      route: 'info',
      title: 'اطلاعات شخصی',
      description: 'اطلاعات شخصی خودرا تکمیل نمایید'
    }
  ]
  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

}
