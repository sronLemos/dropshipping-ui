import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

import { Produto } from './../core/model';

export interface ProdutoFiltro {
  descricao: string;
}

@Injectable()
export class ProdutoService {

  produtosUrl = 'http://localhost:8080/produtos';

  constructor(private http: AuthHttp) { }

  pesquisar(filtro: ProdutoFiltro): Promise<any> {
    const params = new URLSearchParams();

    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    return this.http.get(`${this.produtosUrl}`, { search: params })
      .toPromise()
      .then(response => response.json().content);
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.produtosUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  buscarPorId(id: number): Promise<Produto> {
    return this.http.get(`${this.produtosUrl}/${id}`)
      .toPromise()
      .then(response => {
        const produto = response.json() as Produto;

        return produto;
      });
  }

  atualizar(produto: Produto): Promise<Produto> {
    return this.http.put(`${this.produtosUrl}/${produto.id}`,
        JSON.stringify(produto))
      .toPromise()
      .then(response => {
        const produtoAlterado = response.json() as Produto;

        return produtoAlterado;
      });
  }

  adicionar(produto: Produto): Promise<Produto> {
    return this.http.post(this.produtosUrl,
        JSON.stringify(produto))
      .toPromise()
      .then(response => response.json());
  }


}
