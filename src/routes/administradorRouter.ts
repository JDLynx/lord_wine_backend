import { Router } from 'express';
import { AdministradorControllers } from '../controllers/AdministradorController';

const router=Router();

router.get('/', AdministradorControllers.getAll);

export default router;