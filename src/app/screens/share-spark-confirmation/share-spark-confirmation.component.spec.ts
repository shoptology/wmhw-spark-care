import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSparkConfirmationComponent } from './share-spark-confirmation.component';

describe('ShareSparkConfirmationComponent', () => {
  let component: ShareSparkConfirmationComponent;
  let fixture: ComponentFixture<ShareSparkConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareSparkConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareSparkConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
