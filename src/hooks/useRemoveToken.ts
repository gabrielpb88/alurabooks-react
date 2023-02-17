export const useRemoveToken = () => {
  return () => {
    sessionStorage.removeItem('token');
  };
};
