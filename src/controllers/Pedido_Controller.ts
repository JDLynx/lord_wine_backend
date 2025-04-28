import type { Request, Response } from "express";

export class Pedido_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/pedido');
            res.json({ mensaje: 'Ruta de pedido funcionando correctamente' });
        };
}