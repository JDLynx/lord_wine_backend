import { Router } from 'express';
import { Carrito_de_comprasController } from '../controllers/Carrito_de_compras_Controller';

const router=Router();

router.get('/', Carrito_de_comprasController.getAll);

export default router;
