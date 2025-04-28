import type { Request, Response } from "express";

export class Cliente_Controllers
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/cliente');
            res.json({ mensaje: 'Ruta de cliente funcionando correctamente' });
        };
}