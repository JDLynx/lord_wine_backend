import { Router } from 'express';
import { Gestiona_empleado_inventario_tienda_Controller } from '../controllers/Gestiona_empleado_inventario_tienda_Controller';

const router=Router();

router.get('/', Gestiona_empleado_inventario_tienda_Controller.getAll);

export default router;