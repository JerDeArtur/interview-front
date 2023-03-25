import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { catchError, Observable, throwError, BehaviorSubject } from 'rxjs';
import { ReadContactsresponse } from '../models/read-contacts-response.model';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact.model';
import { Router } from '@angular/router';


@Injectable()

export class ContactsService{

  contacts: Contact[] = [];

  contactsSubject = new BehaviorSubject<Contact[]>([]);

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  getContacts(){
    this.http.get<ReadContactsresponse>(environment.apiUrl + '/contacts')
      .pipe(catchError(err =>{
        return throwError(() => new Error(err.error));
      }
    )).subscribe(({contacts}) =>{
      this.contacts = contacts;
      this.contactsSubject.next([...contacts]);
    });
  }

  getContact(id: number){
    return this.http.get<Contact>(environment.apiUrl + '/contacts/' + id)
    .pipe(catchError(err =>{
      this.router.navigate(['/']);
      return throwError(() => new Error(err.error));
    }
  ))
  }

  deleteContact(id: number){
    this.http.delete<boolean>(environment.apiUrl + '/contacts/' + id)
    .pipe(
      catchError(err =>{
        return throwError(() => new Error(err.error));
      })
    ).subscribe(() =>{
      this.contacts.splice(this.contacts.findIndex(c => c.id === id), 1)
      this.contactsSubject.next([...this.contacts]);
    });
  }

  createContact(contact: Contact){
    this.http.post<number>(environment.apiUrl + '/contacts', contact)
    .pipe(
      catchError(err =>{
        return throwError(() => new Error(err.error));
      })
    ).subscribe( newId => {
      this.contacts.push({...contact, id: newId});
      this.contactsSubject.next([...this.contacts]);
      this.router.navigate(['/']);
    })
  }

  updateContact(contactId: number, contact: Contact){
    this.http.put<number>(environment.apiUrl + '/contacts/' + contactId, contact)
    .pipe(
      catchError(err =>{
        return throwError(() => new Error(err.error));
      })
    ).subscribe( () => {
      this.contacts.splice(this.contacts.findIndex(c => c.id === contactId), 1, {...contact, id: contactId});
      this.contactsSubject.next([...this.contacts]);
      this.router.navigate(['/']);
    })
  }
}
