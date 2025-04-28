import { Router } from 'express';
import { Servicio_empresarial_Controller } from '../controllers/Servicio_empresarial_Controller';

const router=Router();

router.get('/', Servicio_empresarial_Controller.getAll);

export default router;