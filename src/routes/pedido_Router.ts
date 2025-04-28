import { Router } from 'express';
import { Pedido_Controller } from '../controllers/Pedido_Controller';

const router=Router();

router.get('/', Pedido_Controller.getAll);

export default router;