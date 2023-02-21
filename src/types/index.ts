export interface IBook {
  autor: string;
  descricao: string;
  imagem: string;
  nome: string;
  preco: number;
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
