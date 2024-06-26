"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors")); // Importe o pacote cors
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Use o middleware cors
app.use((0, cors_1.default)());
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
