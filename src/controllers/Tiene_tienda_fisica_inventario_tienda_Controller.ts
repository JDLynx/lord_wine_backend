import type { Request, Response } from "express";

export class Tiene_tienda_fisica_inventario_tienda_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/tiene_tienda_fisica_inventario_tienda');
            res.json({ mensaje: 'Ruta de tiene tienda fisica inventario tienda funcionando correctamente' });
        };
}