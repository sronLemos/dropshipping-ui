import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {
  pessoas = [
    { nome: 'José', ativo: true},
    { nome: 'Maria', ativo: false}
  ];

}
