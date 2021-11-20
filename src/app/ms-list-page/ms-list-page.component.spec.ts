import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsListPageComponent } from './ms-list-page.component';

describe('MsListPageComponent', () => {
  let component: MsListPageComponent;
  let fixture: ComponentFixture<MsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
