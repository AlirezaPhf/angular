import { Component, OnInit } from '@angular/core';
import { ITableConfig } from 'src/app/core/interfaces/ITable';
import { myClasses } from 'src/app/core/mock/myClassesData';

@Component({
  selector: 'app-my-classes',
  templateUrl: './my-classes.component.html',
  styleUrls: ['./my-classes.component.scss']
})
export class MyClassesComponent implements OnInit {
  data: any[] = [];
  // ---
  tableConfig: ITableConfig = {
    selectable: true,
    header: [
      {
        key: 'code',
        title: 'کد'
      },
      {
        key: 'title',
        title: 'نام دوره'
      },
      {
        key: 'teacherName',
        title: 'نام استاد'
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
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }


  getData(): void {
    this.data = myClasses;
  }

  onClickRow(item: any) {

  }

}
