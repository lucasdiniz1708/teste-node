import cors from 'cors'; // Importe o pacote cors
import express, { Request, Response } from 'express';

const app = express();

// Use o middleware cors
app.use(cors());

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
