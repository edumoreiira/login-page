import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersControlPageComponent } from './users-control-page.component';

describe('UsersControlPageComponent', () => {
  let component: UsersControlPageComponent;
  let fixture: ComponentFixture<UsersControlPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersControlPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersControlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
