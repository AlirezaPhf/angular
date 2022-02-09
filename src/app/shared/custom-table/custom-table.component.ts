import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() rowClicked = new EventEmitter<any>();
  // ---
  constructor() { }

  ngOnInit(): void {
  }

  onClickRow(index: number, rowData: any) {
    this.rowClicked.emit({ index, rowData });
  }

}
