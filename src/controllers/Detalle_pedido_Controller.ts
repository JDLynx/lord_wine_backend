import type { Request, Response } from "express";

export class Detalle_pedido_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/detalle_pedido');
            res.json({ mensaje: 'Ruta de detalle_pedido funcionando correctamente' });
        };
}