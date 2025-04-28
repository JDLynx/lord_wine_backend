import type { Request, Response } from "express";

export class Categoria_Controllers
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/categoria');
            res.json({ mensaje: 'Ruta de categoria funcionando correctamente' });
        };
}