import type { Request, Response } from "express";

export class Inventario_general_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/inventario_general');
            res.json({ mensaje: 'Ruta de inventario_general funcionando correctamente' });
        };
}