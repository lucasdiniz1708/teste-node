"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors = require('cors');
// Middleware para permitir solicitações CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    app.use(cors());
    next();
});
app.get('/', (req, res) => {
    res.json({ message: 'home' });
});
app.use((req, res) => {
    res.status(404).json({ message: 'página não encontrada' });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
