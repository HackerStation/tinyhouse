"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 9000;
const one = 1;
const two = 2;
app.get('/', (req, res) => {
    res.send(`1 + 2 = ${one + two}`);
});
app.listen(PORT);
console.log(`[app]: http://localhost:${PORT}`);
