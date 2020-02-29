import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiicComponent } from './amiic.component';

describe('AmiicComponent', () => {
  let component: AmiicComponent;
  let fixture: ComponentFixture<AmiicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
