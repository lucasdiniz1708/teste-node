"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
server.get('/', (req, res) => {
    res.send('home');
});
server.use((req, res) => {
    res.send('página não encontrada');
});
server.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
