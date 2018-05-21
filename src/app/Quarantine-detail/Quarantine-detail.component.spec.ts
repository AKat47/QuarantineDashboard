import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarantineDetailComponent } from './Quarantine-detail.component';

describe('QuarantineDetailComponent', () => {
  let component: QuarantineDetailComponent;
  let fixture: ComponentFixture<QuarantineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarantineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarantineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
