import { Router } from 'express';
import { Categoria_Controllers } from '../controllers/Categoria_Controller';

const router=Router();

router.get('/', Categoria_Controllers.getAll);

export default router;