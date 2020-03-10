import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperGetComponent } from './developer-get.component';


describe('DeveloperGetComponent', () => {
  let component: DeveloperGetComponent;
  let fixture: ComponentFixture<DeveloperGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
