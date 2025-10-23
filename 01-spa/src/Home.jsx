import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="container">
      <section className="card">
        <h1>Página de Inicio (SPA/CSR)</h1>
        <p className="lead">Bienvenido. Navega para ver la foto de mi gatito.</p>
        <p><Link className="btn" to="/mascota">Ver foto de mi gatito</Link></p>
        <footer className="muted">Navegación sin recarga completa (React Router).</footer>
      </section>
    </main>
  );
}
