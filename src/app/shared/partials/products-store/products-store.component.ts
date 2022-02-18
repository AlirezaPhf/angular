import { Component, OnInit } from '@angular/core';
import { ITableConfig } from 'src/app/core/interfaces/ITable';
import { lessonData } from 'src/app/core/mock/lessonData';
import { myClasses } from 'src/app/core/mock/myClassesData';

@Component({
  selector: 'app-products-store',
  templateUrl: './products-store.component.html',
  styleUrls: ['./products-store.component.scss']
})
export class ProductsStoreComponent implements OnInit {
  tableConfig: ITableConfig = {
    selectable: true,
    header: [
      {
        key: 'code',
        title: 'کد محصول'
      },
      {
        key: 'title',
        title: 'نام محصول'
      },
      {
        key: 'price',
        title: 'مبلغ'
      },
      {
        key: 'rate',
        title: 'امتیاز'
      },
    ]
  }
  // ---
  boughtData = myClasses;
  // myCoursesData =
  // ---
  constructor() { }

  ngOnInit(): void {
  }

  onClickRow(item: any, type: string): void { }



}
