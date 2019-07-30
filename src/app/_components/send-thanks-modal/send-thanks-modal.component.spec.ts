import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendThanksModalComponent } from './send-thanks-modal.component';

describe('SendThanksModalComponent', () => {
  let component: SendThanksModalComponent;
  let fixture: ComponentFixture<SendThanksModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendThanksModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendThanksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
