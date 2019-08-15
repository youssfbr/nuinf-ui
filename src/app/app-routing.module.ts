import { PessoaFormComponent } from './pessoas/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './pessoas/pessoa-list/pessoa-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pessoas', component: PessoaListComponent },
  { path: 'pessoas/novo', component: PessoaFormComponent },
  { path: 'pessoas/editar/:id', component: PessoaFormComponent },
  { path: '',
    redirectTo: '/pessoas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
