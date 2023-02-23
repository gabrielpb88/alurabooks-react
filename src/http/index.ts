import axios from 'axios';

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
  const res = await http.get('public/mais-vendidos');
  return res.data;
};

export const getNewReleases = async () => {
  const res = await http.get('public/lancamentos');
  return res.data;
};
