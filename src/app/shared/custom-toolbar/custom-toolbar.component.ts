import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.scss']
})
export class CustomToolbarComponent implements OnInit {
  @Input() title!: string;
  // ---
  @Input() hasSearch: boolean = false;
  // ---
  constructor() { }

  ngOnInit(): void {
  }

}
