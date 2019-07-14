import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../seguranca/auth.guard';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosPesquisaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_PESQUISAR_PROUTO']}
  },
  {
    path: 'produtos/novo',
    component: ProdutosCadastroComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_CADASTRAR_PROUTO']}
  },
  {
    path: 'produtos/:id',
    component: ProdutosCadastroComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_CADASTRAR_PROUTO']}
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProdutosRoutingModule {

  constructor() { }
}
