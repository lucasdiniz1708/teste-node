import express, { Request, Response, NextFunction } from 'express';

const app = express();

// Middleware para habilitar o CORS
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'home' });
});

app.use((req: Request, res: Response) => {
    res.status(404).send({ message: 'página não encontrada' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});