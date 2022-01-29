import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ICardHeader } from 'src/app/core/interfaces/ICard';
import { educationData } from 'src/app/core/mock/educationData';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  data = educationData;
  // ---
  constructor(
    private title: Title
  ) {
    title.setTitle('دوره‌ها و کلاس‌های موجود')
  }

  ngOnInit(): void {
  }

}
