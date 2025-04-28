import type { Request, Response } from "express";

export class Servicio_empresarial_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/servicio_empresarial');
            res.json({ mensaje: 'Ruta de servicio empresarial funcionando correctamente' });
        };
}