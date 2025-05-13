import { Router } from 'express';
import { AdministradorControllers } from '../controllers/Administrador_Controller';

const router=Router();

router.get('/', AdministradorControllers.getadministradorAll);
router.get('/:id', AdministradorControllers.getAdministradorId)
router.post('/', AdministradorControllers.crearAdministrador)
router.put('/:id', AdministradorControllers.actualziarAcudienteId)
router.delete('/:id', AdministradorControllers.eliminarAdministradorId)

export default router;