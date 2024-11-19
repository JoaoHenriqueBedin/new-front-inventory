import { Component, OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

    menuActive = false;

    toggleMenu() {
      this.menuActive = !this.menuActive;

    }
}
