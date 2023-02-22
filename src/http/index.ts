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
