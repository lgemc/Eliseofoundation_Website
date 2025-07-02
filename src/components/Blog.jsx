import { useEffect, useRef, useState } from 'react';
import { carruseles } from './BlogData';
import './Blog.css';

export default function Blog() {
  // Ordenar por fecha más reciente
  const carruselesOrdenados = [...carruseles].sort(
    (a, b) => new Date(b.fecha) - new Date(a.fecha)
  );

  return (
    <div id="BLOG">
      <div className="blog_container">
        <h2>Temas de interés</h2>

        {carruselesOrdenados.map((carrusel, i) => (
          <CarruselItem
            key={i}
            imagenes={carrusel.imagenes}
            descripcion={carrusel.descripcion}
          />
        ))}
      </div>
    </div>
  );
}

function CarruselItem({ imagenes, descripcion }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const cambiarSlide = (nuevoIndex) => {
    const total = imagenes.length;
    const nuevo = (nuevoIndex + total) % total;
    setIndex(nuevo);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const slideWidth = track.firstChild.clientWidth;
      track.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  }, [index]);

  return (
    <div className="blog_item">
      <div className="slider">
        <div className="slider-container">
          <ul className="slider-track" ref={trackRef}>
            {imagenes.map((img, i) => (
              <li key={i}>
                <img src={img} alt={`Carrusel ${i + 1}`} />
              </li>
            ))}
          </ul>
        </div>
        <button className="btn-prev" onClick={() => cambiarSlide(index - 1)}>⟨</button>
        <button className="btn-next" onClick={() => cambiarSlide(index + 1)}>⟩</button>
      </div>
      <div className="blog_texto">
        <p>{descripcion}</p>
      </div>
    </div>
  );
}
