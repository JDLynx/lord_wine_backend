import type { Request, Response } from "express";

export class Tiene_detalle_producto_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/tiene_detalle_producto');
            res.json({ mensaje: 'Ruta de tiene detalle producto funcionando correctamente' });
        };
}