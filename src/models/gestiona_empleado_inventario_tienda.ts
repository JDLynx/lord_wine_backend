import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Empleado from './empleado';
import InventarioTienda from './inventario_tienda';

@Table({ tableName: 'GestionaEmpleadoInventarioTienda', timestamps: false })
export class GestionaEmpleadoInventarioTienda extends Model
{
    @ForeignKey(() => Empleado)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    emplCodEmpleado!: string;

    @ForeignKey(() => InventarioTienda)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    invTienIdInventarioTienda!: string;

    @BelongsTo(() => Empleado)
    empleado!: Empleado;

    @BelongsTo(() => InventarioTienda)
    inventarioTienda!: InventarioTienda;
}

export default GestionaEmpleadoInventarioTienda;