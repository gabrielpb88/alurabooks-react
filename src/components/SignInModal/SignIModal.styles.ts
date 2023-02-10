import styled from 'styled-components';

export const ModalContentWrapper = styled.div`
  display: flex;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  width: 500px;
  max-width: 100%;
`;

export const InputsWrapper = styled.div``;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 2rem 0 2rem 1rem;

  span {
    font-size: 20px;
    font-weight: 700;
    color: #002f52;
  }

  button {
    padding: 8px 32px !important;
  }
`;
