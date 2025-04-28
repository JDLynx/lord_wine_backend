import type { Request, Response } from "express";

export class Tiene_tienda_producto_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/tiene_tienda_producto');
            res.json({ mensaje: 'Ruta de tiene tienda producto funcionando correctamente' });
        };
}