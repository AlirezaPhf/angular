import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-star',
  templateUrl: './custom-star.component.html',
  styleUrls: ['./custom-star.component.scss']
})
export class CustomStarComponent implements OnInit {
  @Input() checkedCount = 3;
  // ---
  constructor() { }

  ngOnInit(): void {
  }

}
