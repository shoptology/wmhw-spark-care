import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkSentModalComponent } from './spark-sent-modal.component';

describe('SparkSentModalComponent', () => {
  let component: SparkSentModalComponent;
  let fixture: ComponentFixture<SparkSentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkSentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkSentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
