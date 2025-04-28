import type { Request, Response } from "express";

export class Tienda_fisica_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/tienda_fisica');
            res.json({ mensaje: 'Ruta de tienda física funcionando correctamente' });
        };
}