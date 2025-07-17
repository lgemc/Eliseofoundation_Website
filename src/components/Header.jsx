import './Header.css';

export default function Header() {
  return (
    <header>
      <a href="#INICIO" className="logo">
        <img src="/img/Logo Eliseo.png" alt="logo" />
      </a>
      {/*<a href="#INICIO" className="TITULO">Fundación Eliseo</a>*/}
      <ul className="BARRA_INICIO">
        <li>
          <a href="#INICIO">INICIO</a>
        </li>
        <li>
          <a href="#QUIENES_SOMOS">QUIENES SOMOS</a>
        </li>
        <li>
          <a href="#BLOG">BLOG</a>
        </li>
        <li>
          <a href="#DONACIONES">DONACIONES</a>
        </li>
      </ul>
    </header>
  );
}
