import type { Request, Response } from "express";

export class Carrito_de_comprasController
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/carrito_de_compras');
            res.json({ mensaje: 'Ruta de carrito_de_compras funcionando correctamente' });
        };
}