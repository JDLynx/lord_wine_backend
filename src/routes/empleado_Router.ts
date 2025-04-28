import { Router } from 'express';
import { Empleado_Controller } from '../controllers/Empleado_Controller';

const router=Router();

router.get('/', Empleado_Controller.getAll);

export default router;