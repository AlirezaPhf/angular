import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/IUser';
import { userData } from 'src/app/core/mock/userData';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class ProfileOverviewComponent implements OnInit {
  userData: IUser = userData[0];
  // ---
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
