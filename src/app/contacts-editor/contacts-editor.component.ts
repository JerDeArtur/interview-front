import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';


@Component({
  selector: 'app-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit, OnDestroy{

  contact: Contact = null;
  formGroup = this.createFormGroup();
  isNew = false;
  subs = new Subscription();

  constructor(
    private contactsService: ContactsService,
    private ar: ActivatedRoute,
    private fb: FormBuilder
  ){}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.subs.add(this.ar.params.subscribe(({id}) =>{
      if(id === 'new'){
        this.formGroup = this.createFormGroup();
        this.isNew = true;
        return;
      }
      if(isNaN(id)){
        return;
      }
      this.contactsService.getContact(+id).subscribe(res =>{
        this.contact = res;
        this.formGroup = this.createFormGroup(res);
      });
    }));
  }

  createFormGroup(contact: Contact = {
    id: 0,
    name: '',
    phoneNumber: '',
    email: ''
  }){
    return this.fb.group({
      name: [contact.name, Validators.required],
      phoneNumber: [
        contact.phoneNumber,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(?:\+?\d{2})?\d{9}$/)
        ])
      ],
      email: [contact.email, Validators.compose([Validators.required, Validators.email])]
    })
  }

  submitForm(){
    if(this.isNew){
      this.contactsService.createContact(this.formGroup.value as Contact);
    }else{
      this.contactsService.updateContact(this.contact.id, this.formGroup.value as Contact);
    }
  }

  resetForm(){
    if(this.isNew){
      this.formGroup = this.createFormGroup();
    }else{
      this.formGroup = this.createFormGroup(this.contact);
    }
  }
}
