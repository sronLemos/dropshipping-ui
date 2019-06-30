import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

export interface ProdutoFiltro {
  descricao: string;
}

@Injectable()
export class ProdutoService {

  lancamentosUrl = 'http://localhost:8080/produtos';

  constructor(private http: Http) { }

  pesquisar(filtro: ProdutoFiltro): Promise<any> {
    const headers = new Headers();
    const params = new URLSearchParams();


    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }


    return this.http.get(`${this.lancamentosUrl}`, { headers, search: params })
      .toPromise()
      .then(response => response.json().content)
  }

}
