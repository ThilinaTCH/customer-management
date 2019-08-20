import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { NewCustomerModalComponent } from './customer-list/new-customer/new-customer-modal.component';
import { DeleteCustomerModalComponent } from './customer-list/delete-customer/delete-customer-modal.component';
import { CustomerResolver } from './customer-list/customer-list.resolver';
import { CustomerService } from './services/customer.service';

import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerDetailsResolver } from './customer-details/customer-details.resolver';
import { NewNoteModalComponent } from './customer-details/new-note/new-note-modal.component';
import { UpdateNoteModalComponent } from './customer-details/update-note/update-note-modal.component';
import { DeleteNoteModalComponent } from './customer-details/delete-note/delete-note-modal.component';
import { NoteService } from './services/note.service';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    NewCustomerModalComponent,
    DeleteCustomerModalComponent,
    CustomerDetailsComponent,
    NewNoteModalComponent,
    UpdateNoteModalComponent,
    DeleteNoteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  entryComponents: [
    NewCustomerModalComponent,
    DeleteCustomerModalComponent,
    NewNoteModalComponent,
    UpdateNoteModalComponent,
    DeleteNoteModalComponent
  ],
  providers: [
    CustomerService,
    NoteService,
    CustomerResolver,
    CustomerDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
