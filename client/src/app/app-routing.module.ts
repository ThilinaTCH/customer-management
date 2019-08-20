import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerResolver } from './customer-list/customer-list.resolver';

import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerDetailsResolver } from './customer-details/customer-details.resolver';


const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent,
    resolve: {
      data: CustomerResolver
    }
  },
  {
    path: 'customer/:customerId',
    component: CustomerDetailsComponent,
    resolve: {
      data: CustomerDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
