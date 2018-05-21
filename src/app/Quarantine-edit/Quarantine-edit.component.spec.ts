import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarantineEditComponent } from './Quarantine-edit.component';

describe('QuarantineEditComponent', () => {
  let component: QuarantineEditComponent;
  let fixture: ComponentFixture<QuarantineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarantineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarantineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
