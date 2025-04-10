import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import InventarioGeneral from './inventario_general';

@Table({ tableName: 'InventarioTienda', timestamps: false })
export class InventarioTienda extends Model
{
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    invTienIdInventarioTienda!: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    invTienCantidadDisponible!: number;

    @ForeignKey(() => InventarioGeneral)
    @Column({ type: DataType.STRING(50), allowNull: false })
    invGenIdInventarioGeneral!: string;

    @BelongsTo(() => InventarioGeneral)
    inventarioGeneral!: InventarioGeneral;
}

export default InventarioTienda;