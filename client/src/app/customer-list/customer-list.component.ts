import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerModel } from "./customer.model";
import { CustomerService } from '../services/customer.service';
import { MatDialog } from '@angular/material';
import { NewCustomerModalComponent } from './new-customer/new-customer-modal.component';
import { DeleteCustomerModalComponent } from './delete-customer/delete-customer-modal.component';

@Component({
  selector: 'customer-list',
  styleUrls: ['./customer-list.scss'],
  templateUrl: './customer-list.component.html'
})

export class CustomerListComponent implements OnInit{

  customers: Array<CustomerModel>;
  searchText: string = '';

  constructor(
    private route: ActivatedRoute,
    public customerService: CustomerService,
    public dialog: MatDialog
    ){}

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.customers = data.customers;
      }
    })
  }

  openNewCustomerModal(categorySlug){
    let dialogRef = this.dialog.open(NewCustomerModalComponent, {});

    dialogRef.afterClosed().subscribe(customer => {
      if(customer){
        this.addCustomerToList(customer);
      }
    })
  }

  delete(customerId){
    let dialogRef = this.dialog.open(DeleteCustomerModalComponent, {
      data: { customerId: customerId }
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if(confirm){
        var index = this.customers.findIndex((customer) => customer.id === customerId);
        this.customers.splice(index, 1);
      }
    });
  }

  addCustomerToList(customer){
    this.customers.push(customer);
  }
}
