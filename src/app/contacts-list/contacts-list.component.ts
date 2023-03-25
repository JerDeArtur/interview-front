import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit{

  sortBy: keyof Contact = null;

  sortOrder: number = 0;

  sortOrders = {
    id: 0,
    name: 0,
    email: 0,
    phoneNumber: 0
  }

  contacts: Contact[] = [];

  subj: BehaviorSubject<Contact[]>;

  constructor(private contacsService: ContactsService){
    this.subj = this.contacsService.contactsSubject;
  }

  ngOnInit(): void {
    this.contacsService.getContacts();
  }

  deleteContact(id: number){
    this.contacsService.deleteContact(id);
  }

  sort(sortBy: keyof Contact){
    if(sortBy !== this.sortBy){
      this.sortOrders = {
        id: 0,
        name: 0,
        email: 0,
        phoneNumber: 0
      }
    };
    if(this.sortOrders[sortBy] === 2){
      this.sortOrders[sortBy] = 0;
    }
    else{
      this.sortOrders[sortBy] += 1;
    }
    this.sortBy = sortBy;
    this.sortOrder = this.sortOrders[sortBy];
  }
}
