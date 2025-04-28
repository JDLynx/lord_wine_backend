import type { Request, Response } from "express";

export class Empleado_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/empleado');
            res.json({ mensaje: 'Ruta de empleado funcionando correctamente' });
        };
}