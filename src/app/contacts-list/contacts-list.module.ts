import { NgModule } from '@angular/core';
import { ContactsListRoutingModule } from './contacts-list-routing.module';
import { ContactsListComponent } from './contacts-list.component';


@NgModule({
  imports: [ContactsListRoutingModule],
  declarations: [ContactsListComponent],
  providers: []
})
export class ContactsListModule{}
