import axios from 'axios';
import { IBook, ICategorie } from '../types';

export const http = axios.create({ baseURL: 'http://localhost:8000/' });

export const getCategoryBySlug = async (slug: string) => {
  const res = await http.get('categorias', {
    params: {
      slug,
    },
  });

  return res.data[0];
};

export const getBestSellers = async () => {
  const res = await http.get<IBook[]>('public/mais-vendidos');
  return res.data;
};

export const getNewReleases = async () => {
  const res = await http.get<IBook[]>('public/lancamentos');
  return res.data;
};

export const getBooksByCategory = async (categorie: ICategorie) => {
  const res = await http.get<IBook[]>('livros', {
    params: {
      categoria: categorie.id,
    },
  });
  return res.data;
};
