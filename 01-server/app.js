import express from 'express';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3000;
// Servir archivos estáticos (CSS, imágenes públicas)
app.use('/public', express.static(path.join(__dirname, 'public')));
// Ruta Inicio (SSR)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Ruta Mascota (SSR)
app.get('/mascota', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mascota.html'));
});
// Servir imagen local lucy.jpg desde /images/lucy
app.get('/images/lucy', (req, res) => {
    const imgPath = path.join(__dirname, 'public', 'images', 'lucy.jpg');
    res.sendFile(imgPath, (err) => {
        if (err) {
            console.error('Error al enviar lucy.jpg:', err);
            if (!res.headersSent)
                res.status(404).send('Imagen no encontrada. Coloca lucy.jpg en 01-server/public/images/');
        }
    });
});
app.listen(PORT, () => {
    console.log(`SSR server running: http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map