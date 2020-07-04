import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyNUComponent } from './why-nu.component';

describe('WhyNUComponent', () => {
  let component: WhyNUComponent;
  let fixture: ComponentFixture<WhyNUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyNUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyNUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
