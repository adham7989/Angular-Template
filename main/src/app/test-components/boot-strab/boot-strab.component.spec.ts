import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootStrabComponent } from './boot-strab.component';

describe('BootStrabComponent', () => {
  let component: BootStrabComponent;
  let fixture: ComponentFixture<BootStrabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootStrabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootStrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
