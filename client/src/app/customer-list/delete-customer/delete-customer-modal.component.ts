import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'delete-customer-modal',
  templateUrl: 'delete-customer-modal.component.html',
  styleUrls: ['../../styles/modals.scss']
})

export class DeleteCustomerModalComponent {
  constructor(
    public thisDialogRef: MatDialogRef<DeleteCustomerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    public customerService: CustomerService
  ){}

  onDeleteConfirm() {
    this.customerService.deleteCustomer(this.modalData.customerId)
    .then(res => {
      this.thisDialogRef.close(true);
    })
  }

  onDeleteCancel() {
    this.thisDialogRef.close(false);
  }

}
