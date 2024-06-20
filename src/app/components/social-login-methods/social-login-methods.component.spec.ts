import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLoginMethodsComponent } from './social-login-methods.component';

describe('SocialLoginMethodsComponent', () => {
  let component: SocialLoginMethodsComponent;
  let fixture: ComponentFixture<SocialLoginMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLoginMethodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialLoginMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
