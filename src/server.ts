import express from 'express';

const server = express();
const PORT = process.env.PORT || 4000;

server.get('/', (req, res) => {
    res.send('home');
});

server.use((req, res) => {
    res.send('página não encontrada');
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 