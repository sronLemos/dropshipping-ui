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
  categoria = new Categoria();
  vendedor = new Pessoa();
}

export class Categoria {
  id: number;
  descricao: string;
}
