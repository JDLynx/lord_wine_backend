import { Router } from 'express';
import { Inventario_tienda_Controller } from '../controllers/Inventario_tienda_Controller';

const router=Router();

router.get('/', Inventario_tienda_Controller.getAll);

export default router;