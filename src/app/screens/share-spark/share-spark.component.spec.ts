import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSparkComponent } from './share-spark.component';

describe('ShareSparkComponent', () => {
  let component: ShareSparkComponent;
  let fixture: ComponentFixture<ShareSparkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareSparkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareSparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
