import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantlistingComponent } from './restaurantlisting.component';

describe('RestaurantlistingComponent', () => {
  let component: RestaurantlistingComponent;
  let fixture: ComponentFixture<RestaurantlistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantlistingComponent]
    });
    fixture = TestBed.createComponent(RestaurantlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
