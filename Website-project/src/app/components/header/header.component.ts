import { Component } from '@angular/core';
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuButtons = false;

  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<GalleryModalComponent, any> | undefined;
  constructor(public matDialog: MatDialog) {}

  ngAfterViewInit(): void {
    document.onclick = (args: any): void => {
      if (args.target.tagName === 'BODY') {
        this.modalDialog?.close();
      }
    };
  }
  openModal() {
    this.dialogConfig.id = 'gallery-modal-component';
    this.dialogConfig.height = '100vh';
    this.dialogConfig.width = '100vw';
    this.modalDialog = this.matDialog.open(
      GalleryModalComponent,
      this.dialogConfig
    );
  }

  toggleMenuButtons() {
    if (this.menuButtons === false) {
      this.menuButtons = true;
    } else if (this.menuButtons === true) {
      this.menuButtons = false;
    }
  }

  openProjects() {
    console.log('Projects');
  }
  openAboutMe() {
    console.log('AboutMe');
  }
  openWebsites() {
    console.log('openWebsites');
  }
  openPhotos() {
    console.log('openPhotos');
  }
}
