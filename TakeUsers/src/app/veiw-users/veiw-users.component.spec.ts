import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwUsersComponent } from './veiw-users.component';

describe('VeiwUsersComponent', () => {
  let component: VeiwUsersComponent;
  let fixture: ComponentFixture<VeiwUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiwUsersComponent]
    });
    fixture = TestBed.createComponent(VeiwUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
