import type { Request, Response } from "express";

export class Producto_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/producto');
            res.json({ mensaje: 'Ruta de producto funcionando correctamente' });
        };
}