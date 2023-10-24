import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponentComponent } from './gallery-component.component';

describe('GalleryComponentComponent', () => {
  let component: GalleryComponentComponent;
  let fixture: ComponentFixture<GalleryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponentComponent]
    });
    fixture = TestBed.createComponent(GalleryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
