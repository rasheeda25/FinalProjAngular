import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerByCSAComponent } from './tower-by-csa.component';

describe('TowerByCSAComponent', () => {
  let component: TowerByCSAComponent;
  let fixture: ComponentFixture<TowerByCSAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerByCSAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerByCSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
