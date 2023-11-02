import { Component,OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginComponent:string ='';
  adminCode:string='';
  
  constructor(private authService:AuthService, private routeService: RouteService) { }

  ngOnInit(): void {
  }

  validateLoginCode() {
    this.authService.login(this.adminCode);
    if(this.authService.isLoggedIn) {
        this.routeService.navigateOrderRequestsView();
    }
    else{
    alert('enter valid login code');
    }
}


}

