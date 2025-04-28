import type { Request, Response } from "express";

export class Detalle_carrito_Controllers
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/detalle_carrito');
            res.json({ mensaje: 'Ruta de detalle_carrito funcionando correctamente' });
        };
}