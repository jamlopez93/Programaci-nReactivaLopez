import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataComponentComponent } from './show-data-component.component';

describe('ShowDataComponentComponent', () => {
  let component: ShowDataComponentComponent;
  let fixture: ComponentFixture<ShowDataComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDataComponentComponent]
    });
    fixture = TestBed.createComponent(ShowDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
