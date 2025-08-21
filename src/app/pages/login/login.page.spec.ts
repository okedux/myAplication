import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiginPage } from './login.page';

describe('LiginPage', () => {
  let component: LiginPage;
  let fixture: ComponentFixture<LiginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LiginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
