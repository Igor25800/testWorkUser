import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliUserComponent } from './detali-user.component';

describe('DetaliUserComponent', () => {
  let component: DetaliUserComponent;
  let fixture: ComponentFixture<DetaliUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaliUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaliUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
