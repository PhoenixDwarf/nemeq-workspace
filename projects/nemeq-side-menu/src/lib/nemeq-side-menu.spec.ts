import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NemeqSideMenu } from './nemeq-side-menu';

describe('NemeqSideMenu', () => {
  let component: NemeqSideMenu;
  let fixture: ComponentFixture<NemeqSideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NemeqSideMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NemeqSideMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
