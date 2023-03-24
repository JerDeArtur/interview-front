import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./contacts-list/contacts-list.module').then((x) => x.ContactsListModule)
  },
  {
    path: 'editor',
    loadChildren: () => import('./contacts-editor/contacts-editor.module').then((x) => x.ContactsEditorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
