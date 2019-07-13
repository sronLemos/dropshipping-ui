export class Pessoa {
  id: number;
  nome: string;
  ativo = true;
}

export class Produto {
  id: number;
  descricao: string;
  precoVenda: number;
  quantidadeEstoque: number;
  categoria: any;
}
