import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, HasOne } from 'sequelize-typescript';
import { InventarioGeneral } from './inventario_general';
import { Producto } from './producto';
import { Empleado } from './empleado';

@Table({ tableName: 'InventarioTienda' }) export class InventarioTienda extends Model<InventarioTienda>
{
    @Column({ primaryKey: true, autoIncrement: true })
    invTienIdInventarioTienda!: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    invTienCantidadDisponible!: number;

    @ForeignKey(() => InventarioGeneral)
    @Column({ allowNull: false })
    invGenIdInventarioGeneral!: number;

    @BelongsTo(() => InventarioGeneral)
    inventarioGeneral!: InventarioGeneral;

    @HasMany(() => Producto)
    productos!: Producto[];

    @HasOne(() => Empleado)
    empleado!: Empleado;
}

export default InventarioTienda;