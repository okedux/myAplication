import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaguinaPage } from './paguina.page';

describe('PaguinaPage', () => {
  let component: PaguinaPage;
  let fixture: ComponentFixture<PaguinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaguinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
