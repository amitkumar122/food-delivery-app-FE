import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantlistingComponent } from './component/restaurantlisting.component';

const routes: Routes = [
  { path: '', component: RestaurantlistingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantlistingRoutingModule { }
