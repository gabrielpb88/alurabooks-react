import Title from '../../components/Title';
import HighlightBooks from '../../components/HighlightBooks';
import Newsletter from '../../components/Newsletter';

const Home = () => {
  const lancamentos = [
    {
      autor: 'Tárcio Zemel',
      descricao: 'Técnicas e ferramentas que fazem a diferença nos seus estilos',
      imagem: '/images/books/css.jpg',
      nome: 'CSS Eficiente',
      preco: 29.9,
    },
    {
      autor: 'Natan Souza',
      descricao: 'Aprendendo pré-processadores CSS',
      imagem: '/images/books/sass.jpg',
      nome: 'Sass',
      preco: 29.9,
    },
    {
      autor: 'Diego Eis',
      descricao: 'O caminho das pedras para ser um dev Front-End',
      imagem: '/images/books/frontend.jpg',
      nome: 'Guia Front-End',
      preco: 29.9,
    },
  ];
  const maisVendidos = [
    {
      autor: 'Thiago da Silva Adriano',
      descricao: 'Melhore suas aplicações JavaScript',
      imagem: '/images/books/typescript.jpg',
      nome: 'Guia prático de TypeScript',
      preco: 29.9,
    },
    {
      autor: 'Akira Hanashiro',
      descricao: 'A revolucionária linguagem de consulta e manipulação de dados para APIs',
      imagem: '/images/books/graphql.jpg',
      nome: 'GraphQL',
      preco: 29.9,
    },
    {
      autor: 'Vinícius Carvalho',
      descricao: 'PostgreSQL',
      imagem: '/images/books/postgre.jpg',
      nome: 'PostgreSQL',
      preco: 29.9,
    },
  ];
  return (
    <main>
      <Title>Últimos Lançamentos</Title>
      <HighlightBooks books={lancamentos} />

      <Title>Mais vendidos</Title>
      <HighlightBooks books={maisVendidos} />

      <Newsletter />
    </main>
  );
};
export default Home;
