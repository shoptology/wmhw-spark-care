import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkConfirmationComponent } from './spark-confirmation.component';

describe('SparkConfirmationComponent', () => {
  let component: SparkConfirmationComponent;
  let fixture: ComponentFixture<SparkConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
