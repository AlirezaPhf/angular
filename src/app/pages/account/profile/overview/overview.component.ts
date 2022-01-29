import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/IUser';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input() userData!: IUser;
  // ---
  constructor() { }

  ngOnInit(): void {
  }

}
