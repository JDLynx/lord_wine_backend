"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});
router.get('/nosotros', (req, res) => {
    console.log('Ruta /nosotros visitada');
    res.send('¡Nosotros!');
});
router.get('/blog', (req, res) => {
    console.log('Ruta /blog visitada');
    res.send('¡Blog!');
});
exports.default = router;
//# sourceMappingURL=router.js.map