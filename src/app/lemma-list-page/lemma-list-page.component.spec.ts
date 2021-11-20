import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemmaListPageComponent } from './lemma-list-page.component';

describe('LemmaListPageComponent', () => {
  let component: LemmaListPageComponent;
  let fixture: ComponentFixture<LemmaListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemmaListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemmaListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
