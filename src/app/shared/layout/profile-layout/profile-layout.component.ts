import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IUser } from 'src/app/core/interfaces/IUser';
import { ProfileService } from 'src/app/pages/account/profile/profile.service';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {
  userData!: IUser;
  menuItems = [
    {
      title: 'مشخصات',
      link: 'overview',
    },
    {
      title: 'تنظیمات',
      link: 'settings',
    },
    {
      title: 'احراز هویت',
      link: 'authentication',
    },
    {
      title: 'کیف پول',
      link: 'wallet',
    }
  ]
  // ---
  constructor(
    private profileService: ProfileService,
    private title: Title
  ) {
    title.setTitle('پروفایل کاربری');
  }

  ngOnInit(): void {
    this.getData();
  }

  /**
   * @description get data from api
   * @author Alireza PhF
   */
  getData(): void {
    this.userData = this.profileService.getUserById(0);
  }

}
