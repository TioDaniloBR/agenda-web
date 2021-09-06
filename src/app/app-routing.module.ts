import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Inicio } from '../pages/inicio/inicio';
import { Teste } from 'src/pages/teste/teste';
import { Adicionar } from 'src/pages/adicionar/adicionar';
import { Contato } from 'src/pages/contatos/contato';

const routes: Routes = [
  {path: '', component: Inicio},
  {path: 'teste', component: Teste},
  {path: 'adicionar', component: Adicionar},
  {path: 'adicionar/:id', component: Adicionar},
  {path: 'contato', component: Contato},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
