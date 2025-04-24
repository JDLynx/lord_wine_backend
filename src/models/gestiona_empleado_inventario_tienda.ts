import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Empleado } from './empleado';
import { InventarioTienda } from './inventario_tienda';

@Table({ tableName: 'GestionaEmpleadoInventarioTienda', timestamps: false }) export class GestionaEmpleadoInventarioTienda extends Model<GestionaEmpleadoInventarioTienda>
{
    @ForeignKey(() => Empleado)
    @Column
    emplCodEmpleado!: number;

    @ForeignKey(() => InventarioTienda)
    @Column
    invTienIdInventarioTienda!: number;
}

export default GestionaEmpleadoInventarioTienda;