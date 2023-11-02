import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CanDeactivateGuard } from './services/can-deactivate.guard';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { HomeComponent } from './home/home.component';
import { OrderRequestComponent } from './order-request/order-request.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  { path: "", component:  HomeComponent},
  { path: "cartitem/:id", component: CartitemComponent ,canDeactivate:[CanDeactivateGuard] },
  { path: "order-requests", component: OrderRequestComponent,canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
