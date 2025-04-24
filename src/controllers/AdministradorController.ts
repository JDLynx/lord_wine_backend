import type { Request, Response } from "express";

export class AdministradorControllers
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/administrador');
            res.json({ mensaje: 'Ruta de administrador funcionando correctamente' });
        };
}