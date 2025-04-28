import { Router } from 'express';
import { AdministradorControllers } from '../controllers/Administrador_Controller';

const router=Router();

router.get('/', AdministradorControllers.getAll);

export default router;