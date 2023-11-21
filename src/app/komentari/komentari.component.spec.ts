import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomentariComponent } from './komentari.component';

describe('KomentariComponent', () => {
  let component: KomentariComponent;
  let fixture: ComponentFixture<KomentariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KomentariComponent]
    });
    fixture = TestBed.createComponent(KomentariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
