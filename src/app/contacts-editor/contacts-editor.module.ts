import { NgModule } from '@angular/core';
import { ContactsEditorRoutingModule } from './contacts-editor-routing.module';
import { ContactsEditorComponent } from './contacts-editor.component';


@NgModule({
  imports: [ContactsEditorRoutingModule],
  declarations: [ContactsEditorComponent],
  providers: []
})
export class ContactsEditorModule{}
