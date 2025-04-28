import { Router } from 'express';
import { Cliente_Controllers } from '../controllers/Cliente_Controller';

const router=Router();

router.get('/', Cliente_Controllers.getAll);

export default router;