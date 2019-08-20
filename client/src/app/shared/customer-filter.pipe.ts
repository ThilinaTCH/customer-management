import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customerFilter' })
export class CustomerFilterPipe implements PipeTransform {

  transform(customers: any[], searchString: string): any {
    if (!customers || !customers) {
      return customers;
    }
    searchString = searchString.toString().toLowerCase();

    return customers.filter(item =>
      item.firstName.toString().toLowerCase().indexOf(searchString) !== -1 ||
      item.lastName.toString().toLowerCase().indexOf(searchString) !== -1 ||
      item.phone.toString().toLowerCase().indexOf(searchString) !== -1 ||
      item.email.toString().toLowerCase().indexOf(searchString) !== -1 ||
      item.status.toString().toLowerCase().indexOf(searchString) !== -1
    );
  }
}