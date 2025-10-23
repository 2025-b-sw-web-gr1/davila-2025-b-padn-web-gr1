import React from 'react';
import { Link } from 'react-router-dom';

export default function Pet() {
  return (
    <main className="container">
      <section className="card">
        <h1>Esta es mi mascota: mi gatito (SPA/CSR)</h1>
        <div className="image-wrap">
          <img
            src="https://media.discordapp.net/attachments/945787057790386186/1430030912376274965/Imagen_de_WhatsApp_2025-10-10_a_las_21.26.32_c6c00638.jpg?ex=68fb9752&is=68fa45d2&hm=d77bdf3aa871809904aba691549dcca19e099156718356cfbf3031f007b77410&=&format=webp&width=523&height=929"
            alt="Foto de mi gatito"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placekitten.com/800/520'; }}
          />
        </div>
        <p><Link className="btn ghost" to="/">Volver al inicio</Link></p>
        <footer className="muted">Si no existe la imagen local, se mostrará una imagen de fallback.</footer>
      </section>
    </main>
  );
}
