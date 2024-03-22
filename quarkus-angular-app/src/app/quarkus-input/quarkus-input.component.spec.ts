import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarkusInputComponent } from './quarkus-input.component';

describe('QuarkusInputComponent', () => {
  let component: QuarkusInputComponent;
  let fixture: ComponentFixture<QuarkusInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuarkusInputComponent]
    });
    fixture = TestBed.createComponent(QuarkusInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
