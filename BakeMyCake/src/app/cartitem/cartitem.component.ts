import { Component,OnInit } from '@angular/core';
import { Cake } from '../models/cake';
import { Customer } from '../models/customerdetails';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';
import { RequestService } from '../services/request.service';
import { RouteService } from '../services/route.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cartitem', 
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {

  item?: Cake;
  stars: Array<number> = [];
  customer: Customer = {};
  tdate=new Date();

  constructor(private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    private requestService: RequestService,
    private routeService: RouteService,
    private snackBar: MatSnackBar) { }


    submitStatus:boolean=false;

    canDeactivate() {
      if (!this.submitStatus)
          this.submitStatus = confirm("You have not submitted a request to make order. Any details entered will be lost. Are you sure you want to leave?");
      return this.submitStatus;
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get("id") ?? "";
      this.itemService.getItem(id).subscribe(data => {
        this.item = data;
        this.stars = new Array(this.item.rating);
        this.submitStatus = false;
      })
    })
  }

  makeRequest() {
    if (this.customer.customerName && this.customer.customerEmail &&this.customer.address && this.customer.customerPhone && this.customer.orderDate && this.customer.quantity&& this.customer.message&&this.customer.quantity) {
      this.customer.itemName = this.item?.itemName;
      this.requestService.saveOrderRequest(this.customer).subscribe({
        next: data => {
          this.snackBar.open("Request Submitted", "", {
            duration: 3000
          });
          this.submitStatus = true; 
          this.routeService.navigateToLandingView();
        },
        error: err => {
          alert(err);
        }
      })
    }
  }



}
