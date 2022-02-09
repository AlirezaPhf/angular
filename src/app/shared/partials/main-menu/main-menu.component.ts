import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  host: { '(document:click)': 'closeItems()' },
})
export class MainMenuComponent implements OnInit {
  openedSearch = false;
  // ---
  openedNotification = false;
  // ---
  constructor(
    public title: Title,
    public mainService: MainService
  ) { }

  ngOnInit(): void {
  }

  closeItems(): void {
    this.openedSearch = false;
    this.openedNotification = false;

  }

}
