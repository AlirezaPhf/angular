import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.scss'],
  host: { '(document:click)': 'closeFilterMenu()' },
})
export class CustomFilterComponent implements OnInit {
  @Input() customClass!: string;
  // ---
  @Input() title: string = 'فیلتر';
  // ---
  @Input() hasIcon: boolean = true;
  // ---
  openedFilter = false;
  // ---
  constructor() { }

  ngOnInit(): void {
  }

  closeFilterMenu(): void {
    this.openedFilter = false;
  }

}
