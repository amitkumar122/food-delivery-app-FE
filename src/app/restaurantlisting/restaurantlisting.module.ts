import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantlistingRoutingModule } from './restaurantlisting-routing.module';
import { RestaurantlistingComponent } from './component/restaurantlisting.component';


@NgModule({
  declarations: [
    RestaurantlistingComponent
  ],
  imports: [
    CommonModule,
    RestaurantlistingRoutingModule
  ]
})
export class RestaurantlistingModule { }
