import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdabraniSlatkisComponent } from './odabrani-slatkis.component';

describe('OdabraniSlatkisComponent', () => {
  let component: OdabraniSlatkisComponent;
  let fixture: ComponentFixture<OdabraniSlatkisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdabraniSlatkisComponent]
    });
    fixture = TestBed.createComponent(OdabraniSlatkisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
