import { Router } from 'express';
import { Tiene_detalle_producto_Controller } from '../controllers/Tiene_detalle_producto_Controller';

const router=Router();

router.get('/', Tiene_detalle_producto_Controller.getAll);

export default router;