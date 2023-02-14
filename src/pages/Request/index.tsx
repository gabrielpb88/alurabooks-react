import { AbButton } from 'alurabooks-ds-gb';
import { ButtonWrapper, H2, Hr, PageWrapper, RequestsWrapper, RequestWrapper } from './Request.styles';

const Request = () => {
  const pedidos = [
    { pedido: 89019041, date: '26/05/2022', value: 48, deliveredAt: '30/05/2022' },
    { pedido: 89019040, date: '24/03/2022', value: 65.66, deliveredAt: '30/03/2022' },
  ];
  return (
    <PageWrapper>
      <H2>Pedidos</H2>
      <RequestsWrapper>
        {pedidos.map((produto, index, array) => {
          return (
            <>
              <RequestWrapper key={produto.pedido}>
                <p>
                  Pedido: <span>{produto.pedido}</span>
                </p>
                <p>
                  Pedido: <span>{produto.date}</span>
                </p>
                <p>
                  Pedido:{' '}
                  <span>
                    {Intl.NumberFormat('pt-br', {
                      style: 'currency',
                      currency: 'brl',
                    }).format(produto.value)}
                  </span>
                </p>
                <p>
                  Pedido: <span>{produto.deliveredAt}</span>
                </p>
                <ButtonWrapper>
                  <AbButton>Detalhes</AbButton>
                </ButtonWrapper>
              </RequestWrapper>
              {index + 1 < array.length && <Hr />}
            </>
          );
        })}
      </RequestsWrapper>
    </PageWrapper>
  );
};
export default Request;
