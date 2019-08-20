import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CustomerModel } from "../customer-list/customer.model";
import { environment } from '../../environments/environment';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getCustomers(): Promise<CustomerModel[]> {
    return this.http.get(`${environment.api_url}customers`)
      .toPromise()
      .then(res => res.json() as CustomerModel[])
  }

  getCustomerById(id: string) {
    return this.http.get(`${environment.api_url}customers/${id}`)
      .toPromise()
      .then(res => res.json() as CustomerModel)
  }

  createCustomer(customer: CustomerModel) {
    return this.http.post(`${environment.api_url}customers`, customer)
      .toPromise()
      .then(res => res.json() as CustomerModel)
  }

  deleteCustomer(id: string) {
    return this.http.delete(`${environment.api_url}customers/${id}`)
      .toPromise();
  }

  updateStatus(id: string, customer: CustomerModel){
    return this.http.put(`${environment.api_url}customers`, customer)
      .toPromise()
      .then(res => res.json() as CustomerModel)
  }
}
