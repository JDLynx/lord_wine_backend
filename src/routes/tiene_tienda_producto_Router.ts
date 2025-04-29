import { Router } from 'express';
import { Tiene_tienda_producto_Controller } from '../controllers/Tiene_tienda_producto_Controller';

const router=Router();

router.get('/', Tiene_tienda_producto_Controller.getAll);

export default router;