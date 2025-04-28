import { Router } from 'express';
import { Trabaja_Controller } from '../controllers/Trabaja_Controller';

const router=Router();

router.get('/', Trabaja_Controller.getAll);

export default router;