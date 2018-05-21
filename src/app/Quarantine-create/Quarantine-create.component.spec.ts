import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarantineCreateComponent } from './Quarantine-create.component';

describe('QuarantineCreateComponent', () => {
  let component: QuarantineCreateComponent;
  let fixture: ComponentFixture<QuarantineCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarantineCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarantineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
