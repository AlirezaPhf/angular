import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styles: ['.minimized{width: 75px}']
})
export class AsideComponent implements OnInit {
  minimizedAside = false;
  // ---
  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
  }

  onToggleAside() {
    this.minimizedAside = !this.minimizedAside;
    // ---
    this.mainService.minimizedAside.emit(this.minimizedAside ? 'on' : 'off');
  }

}
