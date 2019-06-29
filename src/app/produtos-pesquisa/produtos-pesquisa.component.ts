import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtos-pesquisa.component.html',
  styleUrls: ['./produtos-pesquisa.component.css']
})
export class ProdutosPesquisaComponent  {

  produtos = [
    { descricao: 'MoMouse Óptico Dell MS116 Preto', valor: 54.50, quantidadeEstoque: 200, categoriaDescricao: 'Informática'},
    { descricao: 'Teclado Multimídia Dell KB216 - em Português', valor: 100.00, quantidadeEstoque: 200, categoriaDescricao: 'Informática'},
    { descricao: 'Monitor para PC Full HD Samsung LED Curvo 24 - C24F390F',
        valor: 999.50, quantidadeEstoque: 200, categoriaDescricao: 'Informática'},
    { descricao: 'Teclado Multimídia Dell KB216 - em Português', valor: 100.00, quantidadeEstoque: 200, categoriaDescricao: 'Informática'}
  ];

}
