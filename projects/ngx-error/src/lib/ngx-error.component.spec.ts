import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxErrorComponent } from './ngx-error.component';

describe('NgxErrorComponent', () => {
  let component: NgxErrorComponent;
  let fixture: ComponentFixture<NgxErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
