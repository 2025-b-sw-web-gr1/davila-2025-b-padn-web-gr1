import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 3001;

// Views config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static assets
app.use('/public', express.static(path.join(__dirname, 'public')));

// Demo route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Demo Pug — Motores de Renderizado',
    author: 'Tu nombre',
    items: [
      'Renderizado server-side con plantillas Pug',
      'Ejemplo simple para comparar con EJS'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Pug demo server running: http://localhost:${PORT}`);
});
