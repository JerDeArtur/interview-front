import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsEditorRoutingModule } from './contacts-editor-routing.module';
import { ContactsEditorComponent } from './contacts-editor.component';


@NgModule({
  imports: [ContactsEditorRoutingModule, ReactiveFormsModule, CommonModule],
  declarations: [ContactsEditorComponent],
})
export class ContactsEditorModule{}
