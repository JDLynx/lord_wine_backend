import { Router, Request, Response } from 'express';

console.log('router.ts cargado');

const router = Router();

router.get('/', (req: Request, res: Response) => {
  console.log('Ruta / visitada');
  res.send('¡Hola Mundo!');
});

router.get('/nosotros', (req: Request, res: Response) => {
  console.log('Ruta /nosotros visitada');
  res.send('¡Nosotros!');
});

router.get('/blog', (req: Request, res: Response) => {
  console.log('Ruta /blog visitada');
  res.send('¡Blog!');
});

export default router;