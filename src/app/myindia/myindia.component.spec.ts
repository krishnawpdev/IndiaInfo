import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyindiaComponent } from './myindia.component';

describe('MyindiaComponent', () => {
  let component: MyindiaComponent;
  let fixture: ComponentFixture<MyindiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyindiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
