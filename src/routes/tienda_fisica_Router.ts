import { Router } from 'express';
import { Tienda_fisica_Controller } from '../controllers/Tienda_fisica_Controller';

const router=Router();

router.get('/', Tienda_fisica_Controller.getAll);

export default router;