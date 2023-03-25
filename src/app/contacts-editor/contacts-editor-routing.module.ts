import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsEditorComponent } from './contacts-editor.component';


const paths: Routes = [
  {
    path: ':id',
    component: ContactsEditorComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(paths)],
  exports: [RouterModule]
})
export class ContactsEditorRoutingModule{}
