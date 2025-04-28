import { Router } from 'express';
import { Producto_Controller } from '../controllers/Producto_Controller';

const router=Router();

router.get('/', Producto_Controller.getAll);

export default router;