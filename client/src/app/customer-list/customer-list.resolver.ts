import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { CustomerService } from "../services/customer.service";

@Injectable()
export class CustomerResolver implements Resolve<any> {

  constructor(
    private customerService: CustomerService
  ) { }

  resolve() {
    return new Promise((resolve, reject) => {

      let breadcrumbs = [
        { url: '/', label: 'Customers' }
      ];

      //get customers from local json file
      this.customerService.getCustomers()
      .then(
        customers => {
          return resolve({
            customers: customers,
            breadcrumbs: breadcrumbs
          });
        },
        err => {
          return resolve(null);
        }
      )
    });
  }
}
