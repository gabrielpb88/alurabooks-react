import React from 'react';
import { Banner } from './components/Banner';

function App() {
  return (
    <div className="App">
      <Banner
        titulo="Já sabe por onde começar?"
        subtitulo="Encontre em nossa estante o que precisa para seu desenvolvimento!">
        Componente de input aqui.
      </Banner>
    </div>
  );
}

export default App;
