import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  navigateToLandingView() {
    this.router.navigate([""]);
  }
  navigateOrderRequestsView() {
    this.router.navigate(["order-requests"]);
  }
  navigateToLoginView() {
    this.router.navigate(["login"]);
  }
}
