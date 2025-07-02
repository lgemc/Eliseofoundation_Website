import { useRef, useState, useEffect } from "react";
import "./Inicio.css"; // Si deseas mantener estilos separados

export default function Inicio() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (trackRef.current) {
        const firstSlide = trackRef.current.querySelector("li");
        if (firstSlide) {
          setSlideWidth(firstSlide.clientWidth);
        }
      }
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  }, [index, slideWidth]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + 6) % 6); // asumiendo 6 imágenes
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % 6);
  };

  return (
    <div id="INICIO">
      <h2>¡Blog del día!</h2>
      <section id="CARRUSEL" className="slider">
        <div className="slider-container">
          <ul className="slider-track" ref={trackRef}>
            <li><img src="/img/1.jpg" alt="1" /></li>
            <li><img src="/img/2.jpg" alt="2" /></li>
            <li><img src="/img/3.jpg" alt="3" /></li>
            <li><img src="/img/4.jpg" alt="4" /></li>
            <li><img src="/img/5.jpg" alt="5" /></li>
            <li><img src="/img/6.jpg" alt="6" /></li>
          </ul>
        </div>
        <button className="btn-prev" onClick={handlePrev}>⟨</button>
        <button className="btn-next" onClick={handleNext}>⟩</button>
      </section>
    </div>
  );
}
