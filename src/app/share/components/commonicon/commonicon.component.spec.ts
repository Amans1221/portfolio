import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoniconComponent } from './commonicon.component';

describe('CommoniconComponent', () => {
  let component: CommoniconComponent;
  let fixture: ComponentFixture<CommoniconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommoniconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommoniconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
