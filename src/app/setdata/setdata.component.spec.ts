import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetdataComponent } from './setdata.component';

describe('SetdataComponent', () => {
  let component: SetdataComponent;
  let fixture: ComponentFixture<SetdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetdataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
