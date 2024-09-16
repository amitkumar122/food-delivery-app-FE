import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDTO } from '../models/OrderDTO';
import { OrderService } from '../service/order.service';
import { FoodItem } from 'src/app/Shared/models/FoodItem';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
orderSummary?: OrderDTO;
  obj: any;
  total?: Number;
  sum?: Number;
  showDialog: boolean = false;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router) { }
  
  ngOnInit() {
    const data = this.route.snapshot.queryParams['data'];
    this.obj = JSON.parse(data);
    this.obj.userId=1;
    this.orderSummary = this.obj;

    if(this.orderSummary && this.orderSummary.foodItemsList){
      this.total = this.orderSummary.foodItemsList.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue['quantity'] * currentValue['price']);
      }, 0);
    }
    
    // for(let i =0; i < this.orderSummary?.foodItemsList?.length;i++){

    // }
    // this.total = 0;
    // this.sum = 0;
    // function myFunction(currentValue: FoodItem) {
    //   this.sum += currentValue.quantity * currentValue?.price;
    // }
  }

  saveOrder() {
    this.orderService.saveOrder(this.orderSummary)
      .subscribe(
        response => {
            this.showDialog = true;
        },
        error => {
          console.error('Failed to save data:', error);
        }
      );
  }

  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/']); // Replace '/home' with the actual route for your home page
  }
}
