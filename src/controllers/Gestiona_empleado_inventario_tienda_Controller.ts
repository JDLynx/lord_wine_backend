import type { Request, Response } from "express";

export class Gestiona_empleado_inventario_tienda_Controller
{
    static getAll=async(req: Request, res: Response)=>
        {
            console.log('Desde /api/gestiona_empleado_inventario_tienda');
            res.json({ mensaje: 'Ruta de gestiona_empleado_inventario_tienda funcionando correctamente' });
        };
}