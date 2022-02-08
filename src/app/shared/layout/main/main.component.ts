import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainLayoutComponent implements OnInit {
  minimizedAside = 'off';
  // ---
  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.getAsideType();
  }

  getAsideType(): void {
    this.mainService.minimizedAside.subscribe(
      x => this.minimizedAside = x
    )
  }

}
