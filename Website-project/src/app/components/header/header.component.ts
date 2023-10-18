import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuButtons = false;

  toggleMenuButtons() {
    if (this.menuButtons === false) {
      this.menuButtons = true;
    } else if (this.menuButtons === true) {
      this.menuButtons = false;
    }
  }

  openProjects() {}
  openAboutMe() {}
  openWebsites() {}
  openPhotos() {}
}
