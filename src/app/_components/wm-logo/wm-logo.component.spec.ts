import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmLogoComponent } from './wm-logo.component';

describe('WmLogoComponent', () => {
  let component: WmLogoComponent;
  let fixture: ComponentFixture<WmLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
