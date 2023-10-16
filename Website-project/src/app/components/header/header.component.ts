import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showFiller = false;

  toggleSideNav() {
    console.log();
  }

  openProjects() {}
  openAboutMe() {}
  openWebsites() {}
  openPhotos() {}
}
