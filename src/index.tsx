import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import { DefaultTheme, GlobalStyle } from './styles/globalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle theme={DefaultTheme} />
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  </React.StrictMode>,
);
