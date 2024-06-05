import express, { Request, Response } from 'express';

const app = express();
const cors = require('cors');


// Middleware para permitir solicitações CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    app.use(cors());
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'home' });
});

app.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'página não encontrada' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});