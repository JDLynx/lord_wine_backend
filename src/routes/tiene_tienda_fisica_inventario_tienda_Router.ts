import { Router } from 'express';
import { Tiene_tienda_fisica_inventario_tienda_Controller } from '../controllers/Tiene_tienda_fisica_inventario_tienda_Controller';

const router=Router();

router.get('/', Tiene_tienda_fisica_inventario_tienda_Controller.getAll);

export default router;