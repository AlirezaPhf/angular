import { Component, Input, OnInit } from '@angular/core';
import { ITableConfig } from 'src/app/core/interfaces/ITable';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() tableConfig!: ITableConfig;
  // ---
  @Input() tableData!: any[];
  // ---
  constructor() { }

  ngOnInit(): void {
  }

}
