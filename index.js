const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir os arquivos estáticos da pasta 'dist'
app.use(express.static(path.join(__dirname, 'ced')));

// Rota para lidar com todas as outras solicitações
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'ced/index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});