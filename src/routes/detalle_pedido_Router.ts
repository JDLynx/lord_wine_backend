import { Router } from 'express';
import { Detalle_pedido_Controller } from '../controllers/Detalle_pedido_Controller';

const router=Router();

router.get('/', Detalle_pedido_Controller.getAll);

export default router;