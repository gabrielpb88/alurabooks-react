export const useSaveToken = () => {
  return (token: string) => {
    sessionStorage.setItem('token', token);
  };
};
