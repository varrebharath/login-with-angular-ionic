import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadriPage } from './badri.page';

describe('BadriPage', () => {
  let component: BadriPage;
  let fixture: ComponentFixture<BadriPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BadriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
