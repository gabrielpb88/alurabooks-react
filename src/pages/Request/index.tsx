import { AbButton } from 'alurabooks-ds-gb';
import { ButtonWrapper, H2, Hr, PageWrapper, RequestsWrapper, RequestWrapper } from './styles';
import { useEffect, useState } from 'react';
import { http } from '../../http';
import { IRequest } from '../../types';

const Request = () => {
  const [requests, setRequests] = useState<IRequest[]>([]);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    http
      .get<IRequest[]>('/pedidos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setRequests(res.data);
      });
  }, []);

  return (
    <PageWrapper>
      <H2>Pedidos</H2>
      <RequestsWrapper>
        {requests.map((pedido, index, array) => {
          return (
            <div key={pedido.id}>
              <RequestWrapper>
                <p>
                  Pedido: <strong>{pedido.id}</strong>
                </p>
                <p>
                  Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong>
                </p>
                <p>
                  Valor total:{' '}
                  <strong>
                    {Intl.NumberFormat('pt-br', {
                      style: 'currency',
                      currency: 'brl',
                    }).format(pedido.total)}
                  </strong>
                </p>
                <p>
                  Entrega realizada em: <strong>{pedido.entrega}</strong>
                </p>
                <ButtonWrapper>
                  <AbButton>Detalhes</AbButton>
                </ButtonWrapper>
              </RequestWrapper>
              {index + 1 < array.length && <Hr />}
            </div>
          );
        })}
      </RequestsWrapper>
    </PageWrapper>
  );
};
export default Request;
