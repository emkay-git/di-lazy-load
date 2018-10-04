import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerComponentComponent } from './eager-component.component';

describe('EagerComponentComponent', () => {
  let component: EagerComponentComponent;
  let fixture: ComponentFixture<EagerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
