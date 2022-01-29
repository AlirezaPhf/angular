import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IUser } from 'src/app/core/interfaces/IUser';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData!: IUser;
  // ---
  constructor(
    private accountService: AccountService,
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
    this.userData = this.accountService.getUserById(0);
  }

}
