import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatformDetailsPage } from './platform-details.page';

describe('PlatformDetailsPage', () => {
  let component: PlatformDetailsPage;
  let fixture: ComponentFixture<PlatformDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
