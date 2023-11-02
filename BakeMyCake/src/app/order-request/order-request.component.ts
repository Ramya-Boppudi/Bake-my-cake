import { Component,OnInit, ViewChild } from '@angular/core';
import { Customer } from '../models/customerdetails';
import { RequestService } from '../services/request.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({ 
  selector: 'app-order-request',
  templateUrl: './order-request.component.html',
  styleUrls: ['./order-request.component.css']
})
export class OrderRequestComponent implements OnInit {

  displayedColumns: string[] = ['customerName', 'customerEmail', 'customerPhone', 'itemName','orderDate','message','address','quantity'];
  orderRequests: Customer[] = [];
  order: any;
  
  constructor(private orderRequestService: RequestService) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngOnInit(): void {

    this.orderRequestService.getAllOrderReqeusts().subscribe({
      next: data => {
        this.orderRequests = data;
      },
      error: err => {
        alert(err);
      }
    });
  }
  
  //handlePageEvent(event: PageEvent) {
    //this.order.paginator = this.paginator;
  //}
}
