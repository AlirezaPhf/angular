import { Component, Input, OnInit } from '@angular/core';
import { ICardHeader } from 'src/app/core/interfaces/ICard';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {
  @Input() header!: ICardHeader;
  // ---
  constructor() { }
  ngOnInit(): void {
  }

}
