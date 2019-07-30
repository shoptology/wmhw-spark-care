import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSparkModalComponent } from './spark-sent-modal.component';

describe('ShareSparkModalComponent', () => {
  let component: ShareSparkModalComponent;
  let fixture: ComponentFixture<ShareSparkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareSparkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareSparkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
