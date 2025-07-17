import './Donaciones.css';

export default function Donaciones() {
  return (
    <section id="DONACIONES">
      <div className="donaciones_container">
        <h2>Apóyanos con tu donación</h2>
        <p>
          Tu aporte nos ayuda a brindar apoyo psicológico a quienes más lo
          necesitan.
        </p>

        <form className="donacion_form">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="correo">Correo electrónico:</label>
          <input type="email" id="correo" name="correo" required />

          <label htmlFor="monto">Monto de donación (COP):</label>
          <input type="number" id="monto" name="monto" required />

          <button type="submit">Donar</button>
        </form>
      </div>
    </section>
  );
}
