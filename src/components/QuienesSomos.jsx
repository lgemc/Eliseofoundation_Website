import { useEffect, useRef } from 'react';
import './QuienesSomos.css';

export default function QuienesSomos() {
  const textoRef = useRef(null);
  const imagenRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textoRef.current.classList.add('activo');
            imagenRef.current.classList.add('activo');
            observer.disconnect(); // se activa solo una vez
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textoRef.current) observer.observe(textoRef.current);
  }, []);

  return (
    <div id="QUIENES_SOMOS">
      <div className="contenido">
        <div className="texto" ref={textoRef}>
          <h1>¿Quiénes somos?</h1>
          <p>
            Somos una fundación comprometida con el bienestar psicológico,
            brindando apoyo profesional y humano a quienes lo necesitan.
          </p>
        </div>
        <div className="imagen">
          <img ref={imagenRef} src="/img/grupo.jpg" alt="grupo humano" />
        </div>
      </div>
    </div>
  );
}
