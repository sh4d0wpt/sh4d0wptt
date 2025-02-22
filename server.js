const express = require('express');
const app = express();
const port = 3000;

// Variável para armazenar o número de visitantes
let visitorCount = 0;

// Rota para obter o número de visitantes
app.get('/api/visitors', (req, res) => {
    res.json({ count: visitorCount });
});

// Rota para incrementar o número de visitantes
app.post('/api/visitors', (req, res) => {
    visitorCount++;
    res.json({ count: visitorCount });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});