import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.send('home');
});

server.use((req, res) => {
    res.send('página não encontrada');
});

server.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});