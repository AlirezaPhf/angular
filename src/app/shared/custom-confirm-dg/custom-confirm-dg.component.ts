import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-confirm-dg',
  templateUrl: './custom-confirm-dg.component.html',
  styleUrls: ['./custom-confirm-dg.component.scss']
})
export class CustomConfirmDgComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string, description: string },
  ) { }

  ngOnInit(): void {
  }

}
