import type { Request, Response } from "express";

export class Inventario_tienda_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/inventario_tienda');
            res.json({ mensaje: 'Ruta de inventario_tienda funcionando correctamente' });
        };
}