import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class EducationItemComponent implements OnInit {
  @Input() data!: any;
  // ---
  constructor() { }

  ngOnInit(): void {
  }

}
