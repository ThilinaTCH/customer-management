import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { CustomerService } from '../services/customer.service';
import { NoteService } from '../services/note.service';

@Injectable()
export class CustomerDetailsResolver implements Resolve<any> {

  constructor(
    private customerService: CustomerService,
    private noteService: NoteService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    let customerId = route.paramMap.get('customerId');

    return new Promise((resolve, reject) => {
      this.customerService.getCustomerById(customerId)
        .then(customer => {

          this.noteService.getCustomerNotes(customerId)
            .then(notes => {
              let breadcrumbs = [
                { url: '/', label: 'Customers' },
                { url: 'customer/' + customerId, label: [customer.firstName, customer.lastName].join(" ") }
              ];
              customer.notes = notes;

              return resolve({
                customer: customer,
                breadcrumbs: breadcrumbs
              });
            },
              err => {
                console.log(err);
                return resolve(null);
              })
        },
          err => {
            console.log(err);
            return resolve(null);
          })
    });
  }
}
