import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CustomerModel } from "../customer-list/customer.model";

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getCustomers(): Promise<CustomerModel[]> {
    return this.http.get("./assets/customers.json")
      .toPromise()
      .then(res => res.json() as CustomerModel[])
  }

  getCustomerById(id: string) {
    return this.getCustomers()
      .then(customers => {
        return customers.find((customer) => {
          return customer.id == id;
        });
      })
  }

  createCustomer(customer: CustomerModel) {
    return this.getCustomers()
      .then(customers => {
        return true;
      })
  }

  deleteCustomer(id: string) {
    return this.getCustomers()
      .then(customers => {
        return true;
      })
  }

  updateStatus(id: string, status: string){
    return this.getCustomers()
      .then(customers => {
        return true;
      })
  }
}
