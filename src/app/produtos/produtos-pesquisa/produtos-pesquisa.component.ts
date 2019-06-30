import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtos-pesquisa.component.html',
  styleUrls: ['./produtos-pesquisa.component.css']
})
export class ProdutosPesquisaComponent implements OnInit {

  produtos = [];
  descricao: string;

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.produtoService.pesquisar({descricao: this.descricao}).then(produtos => this.produtos = produtos);
  }

}
