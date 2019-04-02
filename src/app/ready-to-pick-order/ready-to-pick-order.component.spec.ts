import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToPickOrderComponent } from './ready-to-pick-order.component';

describe('ReadyToPickOrderComponent', () => {
  let component: ReadyToPickOrderComponent;
  let fixture: ComponentFixture<ReadyToPickOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyToPickOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyToPickOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
