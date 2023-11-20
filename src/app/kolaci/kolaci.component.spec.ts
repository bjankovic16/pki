import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolaciComponent } from './kolaci.component';

describe('KolaciComponent', () => {
  let component: KolaciComponent;
  let fixture: ComponentFixture<KolaciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KolaciComponent]
    });
    fixture = TestBed.createComponent(KolaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
