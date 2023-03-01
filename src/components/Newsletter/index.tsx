import { AbTextField } from 'alurabooks-ds-gb';
import { ContentWrapper, NewsletterWrapper } from './styles';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  return (
    <NewsletterWrapper>
      <ContentWrapper>
        <h5>Fique por dentro das novidades!</h5>
        <p>Atualizações de e-books, novos livros, promoções e outros.</p>
      </ContentWrapper>
      <AbTextField placeholder="Cadastre seu e-mail" value={email} onChange={setEmail} />
    </NewsletterWrapper>
  );
};
export default Newsletter;
