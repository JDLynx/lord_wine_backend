import { Router } from 'express';
import { Gestiona_administrador_inventario_general_Controller } from '../controllers/Gestiona_administrador_inventario_general_Controller';

const router=Router();

router.get('/', Gestiona_administrador_inventario_general_Controller.getAll);

export default router;