export interface IBook {
  id: number;
  categoria: number;
  titulo: string;
  slug: string;
  descricao: string;
  isbn: string;
  numeroPaginas: number;
  publicacao: string;
  imagemCapa: string;
  autor: number;
  opcoesCompra: IOpcaoCompra[];
  sobre: string;
}

export interface IRequest {
  id: number;
  data: string;
  entrega: string;
  total: number;
}

export interface ICategorie {
  id: number;
  nome: string;
  slug: string;
}

export interface IOpcaoCompra {
  id: number;
  titulo: string;
  preco: number;
  formatos?: string[];
}

export interface IAuthor {
  id: number;
  nome: string;
  sobre: string;
}
