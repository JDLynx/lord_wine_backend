import { Router } from 'express';
import { Tiene_cliente_carrito_de_compras_Controller } from '../controllers/Tiene_cliente_carrito_de_compras_Controller';

const router=Router();

router.get('/', Tiene_cliente_carrito_de_compras_Controller.getAll);

export default router;