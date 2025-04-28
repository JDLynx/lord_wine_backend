import { Router } from 'express';
import { Inventario_general_Controller } from '../controllers/Inventario_general_Controller';

const router=Router();

router.get('/', Inventario_general_Controller.getAll);

export default router;