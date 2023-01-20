import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExtendedComponent } from './company-extended.component';

describe('CompanyExtendedComponent', () => {
  let component: CompanyExtendedComponent;
  let fixture: ComponentFixture<CompanyExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyExtendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
