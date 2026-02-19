import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NemeqSideMenu } from './nemeq-side-menu';
import { provideRouter } from '@angular/router';

describe('NemeqSideMenu', () => {
  let component: NemeqSideMenu;
  let fixture: ComponentFixture<NemeqSideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NemeqSideMenu],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NemeqSideMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call login when login button is clicked', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    vi.spyOn(component.login, 'emit');

    // authenticated=false renders the login button
    fixture.componentRef.setInput('authenticated', false);
    fixture.detectChanges();
    await fixture.whenStable();

    const loginButton = compiled.querySelector('button[data-test-id="login"]') as HTMLButtonElement;
    expect(loginButton).toBeTruthy();
    loginButton.click();
    expect(component.login.emit).toHaveBeenCalled();
  });

  it('Should call logout when logout button is clicked', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    vi.spyOn(component.logout, 'emit');

    // authenticated=true renders the logout button
    fixture.componentRef.setInput('authenticated', true);
    fixture.detectChanges();
    await fixture.whenStable();

    const logoutButton = compiled.querySelector(
      'button[data-test-id="logout"]',
    ) as HTMLButtonElement;
    expect(logoutButton).toBeTruthy();
    logoutButton.click();
    expect(component.logout.emit).toHaveBeenCalled();
  });
});
