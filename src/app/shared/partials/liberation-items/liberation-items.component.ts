import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITableConfig } from 'src/app/core/interfaces/ITable';
import { liberationData } from 'src/app/core/mock/liberationData';
import { CustomConfirmDgComponent } from '../../custom-confirm-dg/custom-confirm-dg.component';

@Component({
  selector: 'app-liberation-items',
  templateUrl: './liberation-items.component.html',
  styleUrls: ['./liberation-items.component.scss']
})
export class LiberationItemsComponent implements OnInit {
  tableConfig: ITableConfig = {
    selectable: true,
    header: [
      {
        key: 'code',
        title: 'کد دوره'
      },
      {
        key: 'title',
        title: 'نام دوره'
      },
      {
        key: 'meetingNumber',
        title: 'شماره جلسه'
      },
      {
        key: 'price',
        title: 'مبلغ آزادسازی'
      },
      {
        key: 'link',
        title: 'لینک آزادسازی'
      },
    ]
  }
  // ---
  data = liberationData;
  // ---
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onClickRow(data: any): void {
    console.log('data: ', data);
    const dialog = this.dialog.open(CustomConfirmDgComponent, {
      data: {
        title: `آزادسازی دوره ${data.rowData.title}`,
        description: `آیا از آزادسازی دوره ${data.rowData.title} اطمینان دارید ؟`
      },
      width: '450px'
    });
  }

}
