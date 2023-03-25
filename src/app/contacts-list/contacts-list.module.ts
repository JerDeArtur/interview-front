import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsListRoutingModule } from './contacts-list-routing.module';
import { ContactsListComponent } from './contacts-list.component';
import { SortPipe } from './sort.pipe';


@NgModule({
  imports: [ContactsListRoutingModule, CommonModule],
  declarations: [ContactsListComponent, SortPipe],
})
export class ContactsListModule{}
