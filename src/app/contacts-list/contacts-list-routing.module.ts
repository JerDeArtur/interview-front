import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list.component';


const paths: Routes = [
  {
    path: '',
    component: ContactsListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(paths)],
  exports: [RouterModule]
})
export class ContactsListRoutingModule{}
