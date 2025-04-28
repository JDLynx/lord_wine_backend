import type { Request, Response } from "express";

export class Tiene_cliente_carrito_de_compras_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/tiene_cliente_carrito_de_compras');
            res.json({ mensaje: 'Ruta de tiene cliente carrito de compras funcionando correctamente' });
        };
}