import { PessoasCadastroComponent } from './pessoas/pessoas-cadastro/pessoas-cadastro.component';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';


import { NavbarComponent } from './core/navbar/navbar.component';
import { PessoasModule } from './pessoas/pessoas.module';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { ProdutosPesquisaComponent } from './produtos/produtos-pesquisa/produtos-pesquisa.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { SegurancaModule } from './seguranca/seguranca.module';

const routes: Routes = [
  { path: 'produtos', component: ProdutosPesquisaComponent },
  { path: 'produtos/novo', component: ProdutosCadastroComponent },
  { path: 'produtos/:id', component: ProdutosCadastroComponent },
  { path: 'pessoas', component: PessoasPesquisaComponent },
  { path: 'pessoas/novo', component: PessoasCadastroComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    CoreModule,
    ProdutosModule,
    PessoasModule,
    SegurancaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
