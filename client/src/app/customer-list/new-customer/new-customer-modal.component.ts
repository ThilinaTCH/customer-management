import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerModel } from '../customer.model';

@Component({
  selector: 'new-customer-modal',
  templateUrl: './new-customer-modal.component.html',
  exportAs: 'newCustomerModal',
  styleUrls: ['../../styles/modals.scss']
})

export class NewCustomerModalComponent implements OnInit {

  customerForm: FormGroup;

  constructor(
    public customerService: CustomerService,
    public thisDialogRef: MatDialogRef<NewCustomerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
  ) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl(''),
      email: new FormControl(''),
      status: new FormControl('prospective', Validators.required)
    })
  }

  onCloseCancel() {
    this.thisDialogRef.close();
  }

  onSubmit(values) {
    let customer: any = {};
    customer.firstName = values.firstName;
    customer.lastName = values.lastName;
    customer.phone = values.phone;
    customer.email = values.custEmail;
    customer.status = values.status;

    this.customerService.createCustomer(customer)
      .then(response => {
        this.thisDialogRef.close(customer);
        this.customerForm.reset();
      });
  }


}
