import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./contacts-list/contacts-list.module').then((x) => x.ContactsListModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./contacts-editor/contacts-editor.module').then((x) => x.ContactsEditorModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
