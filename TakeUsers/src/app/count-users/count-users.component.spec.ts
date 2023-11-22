import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountUsersComponent } from './count-users.component';

describe('CountUsersComponent', () => {
  let component: CountUsersComponent;
  let fixture: ComponentFixture<CountUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountUsersComponent]
    });
    fixture = TestBed.createComponent(CountUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
