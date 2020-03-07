import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendfcComponent } from './sendfc.component';

describe('SendfcComponent', () => {
  let component: SendfcComponent;
  let fixture: ComponentFixture<SendfcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendfcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
