import { AuthService } from './../../seguranca/auth.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from 'src/app/core/model';
import { ProdutoService } from '../produto.service';
import { CategoriaService } from './../../categorias/categoria.service';
import { ErrorHandlerService } from './../../core/error-handler-service';

import { ToastyService } from 'ng2-toasty';

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
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregarProduto(id);
    }
    this.carregarCategorias();
  }

  carregarProduto(id: number) {
    this.produtoService.buscarPorId(id)
      .then(produto => {
        console.log(produto);
        this.produto = produto;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (Boolean(this.produto.id)) {
      this.atualizarProduto(form);
    } else {
      this.adicionarProduto(form);
    }
  }

  adicionarProduto(form: FormControl) {
    this.produtoService.adicionar(this.produto)
      .then(produtoAdicionado => {
        this.toasty.success('Produto adicionado com sucesso!');

        this.router.navigate(['/produtos', produtoAdicionado.id]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarProduto(form: FormControl) {
 //   this.produto.vendedor(auth.);
    this.produtoService.atualizar(this.produto)
      .then(produto => {
        this.produto = produto;

        this.toasty.success('Produto alterado com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.produto = new Produto();
    }.bind(this), 1);

    this.router.navigate(['/produtos/novo']);
  }

  carregarCategorias() {
    this.categoriaService.listar()
      .then(categorias => {
        this.categorias = categorias.map(c => ({ label: c.descricao, value: c.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
