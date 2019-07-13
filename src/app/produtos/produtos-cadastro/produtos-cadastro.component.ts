import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Produto } from 'src/app/core/model';
import { ProdutoService } from '../produto.service';
import { ErrorHandlerService } from './../../core/error-handler-service';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  categorias = [];
  produto = new Produto();

  constructor(
    private errorHandler: ErrorHandlerService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private title: Title,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.title.setTitle('Novo Produto');

    if (id) {
      this.carregarProduto(id);
    }

  }

  carregarProduto(id: number) {
    this.produtoService.buscarPorId(id)
      .then(produto => {
        this.produto = produto;
        this.title.setTitle(`Edição de Produto: ${this.produto.descricao}`);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
