import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';
import { PlanComponent } from './pages/plan/plan.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'account', pathMatch: 'full', component: AccountComponent },
  { path: 'plan', component: PlanComponent },
  { path: '', component: ProductsComponent },
  { path: '**', component: PageNotfoundComponent }, // Wildcard route for a 404 page
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
