import { Router } from 'express';
import { Detalle_carrito_Controllers } from '../controllers/Detalle_carrito_Controller';

const router=Router();

router.get('/', Detalle_carrito_Controllers.getAll);

export default router;