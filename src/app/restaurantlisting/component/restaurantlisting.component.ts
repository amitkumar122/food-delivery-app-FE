import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/Shared/models/Restaurant';
import { RestaurantService } from '../service/restaurent.service';

@Component({
  selector: 'app-restaurantlisting',
  templateUrl: './restaurantlisting.component.html',
  styleUrls: ['./restaurantlisting.component.css']
})
export class RestaurantlistingComponent {
  public restaurantList: [];

  ngOnInit() {
    this.getAllRestaurants();
  }

  constructor(private router: Router, private restaurantService: RestaurantService) { }

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurantList = data;
      }
    )
  }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  getRandomImage(): string {
    const imageCount = 8; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.JPG`; // Replace with your image filename pattern
  }

  onButtonClick(id: number) {
    this.router.navigate(['/food-catalogue', id]);
  }
}
