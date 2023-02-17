export const useGetToken = () => {
  return () => {
    return sessionStorage.getItem('token');
  };
};
