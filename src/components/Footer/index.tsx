import './rodape.css';
import { Link } from 'react-router-dom';

import alura from 'assets/icons/Alura.svg';
import caelum from 'assets/icons/Caelum.svg';
import casaDoCodigo from 'assets/icons/CasaDoCodigo.svg';
import aluraEmpresas from 'assets/icons/AluraEmpresas.svg';
import aluraLatam from 'assets/icons/AluraLATAM.svg';
import aluraLingua from 'assets/icons/AluraLingua.svg';
import aluraStart from 'assets/icons/AluraStart.svg';
import musicDot from 'assets/icons/MusicDot.svg';
import hipstersTech from 'assets/icons/HipstersTech.svg';
import hipstersJobs from 'assets/icons/HipstersJobs.svg';
import pm3 from 'assets/icons/PM3.svg';
import guj from 'assets/icons/GUJ.svg';
import carreiraSemFronteira from 'assets/icons/CarreiraSemFronteira.svg';
import likeABoss from 'assets/icons/LikeABoss.svg';
import layersTech from 'assets/icons/LayersTech.svg';
import scubaDev from 'assets/icons/ScubaDev.svg';
import { H2, List, StyledFooter } from './Footer.styles';

export const Footer = () => (
  <StyledFooter className="rodapé">
    <H2>Grupo Alura</H2>
    <List>
      <li className="rodapé__lista-titulo">Educação</li>
      <li className="rodapé__item">
        <img src={caelum} alt="Logo da Caelum" />
        <Link to="#" className="rodapé__link">
          Caelum
        </Link>
      </li>
      <li className="rodapé__item">
        <img src={casaDoCodigo} alt="Logo da casa do código" />
        <Link to="#" className="rodapé__link">
          Casa do Código
        </Link>
      </li>
    </List>
    <List>
      <li className="rodapé__lista-titulo">Educação Online</li>
      <li className="rodapé__item">
        <img src={alura} alt="Logo da Alura" />
        <Link to="#" className="rodapé__link">
          Alura
        </Link>
      </li>
      <li className="rodapé__item">
        <img src={aluraEmpresas} alt="Logo da Alura para Empresas" />
        <Link to="#" className="rodapé__link">
          Alura para Empresas
        </Link>
      </li>
      <li className="rodapé__item">
        <img src={aluraLatam} alt="Logo da Alura LATAM" />
        <Link to="#" className="rodapé__link">
          Alura LATAM
        </Link>
      </li>
      <li className="rodapé__item">
        <img src={aluraStart} alt="Logo da Alura Start" />
        <Link to="#" className="rodapé__link">
          Alura Start
        </Link>
      </li>

      <li className="rodapé__item">
        <img src={musicDot} alt="Logo da MusicDot" />
        <Link to="#" className="rodapé__link">
          MusicDot
        </Link>
      </li>

      <li className="rodapé__item">
        <img src={aluraLingua} alt="Logo da Alura" />
        <Link to="#" className="rodapé__link">
          Alura Língua
        </Link>
      </li>

      <li className="rodapé__item">
        <img src={pm3} alt="Logo da PM3" />
        <Link to="#" className="rodapé__link">
          PM3
        </Link>
      </li>
    </List>
    <List>
      <li className="rodapé__lista-titulo">Comunidade</li>
      <li className="rodapé__item">
        <img src={hipstersTech} alt="Hipsters ponto Tech" />
        <Link to="#" className="rodapé__link">
          Hipsters ponto Tech
        </Link>
      </li>
      <li className="rodapé__item">
        <img src={scubaDev} alt="Logo da Scuba Dev" />
        <Link to="#" className="rodapé__link">
          Scuba Dev
        </Link>
      </li>
      <li className="rodapé__item">
        <img src={layersTech} alt="Layers ponto Tech" />
        <Link to="#" className="rodapé__link">
          Layers ponto Tech
        </Link>
      </li>
      <li className="rodapé__item">
        <img src={likeABoss} alt="Like a Boss" />
        <Link to="#" className="rodapé__link">
          Like a Boss
        </Link>
      </li>
      <li className="rodapé__item">
        <img src={carreiraSemFronteira} alt="Carreira sem Fronteira" />
        <Link to="#" className="rodapé__link">
          Carreira sem Fronteira
        </Link>
      </li>
      <li className="rodapé__item">
        <img src={hipstersJobs} alt="Hipsters ponto Jobs" />
        <Link to="#" className="rodapé__link">
          Hipsters ponto Jobs
        </Link>
      </li>
      <li className="rodapé__item">
        <img src={guj} alt="Logo da GUJ" />
        <Link to="#" className="rodapé__link">
          GUJ
        </Link>
      </li>
    </List>
  </StyledFooter>
);
