import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleblogsComponent } from './singleblogs.component';

describe('SingleblogsComponent', () => {
  let component: SingleblogsComponent;
  let fixture: ComponentFixture<SingleblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
