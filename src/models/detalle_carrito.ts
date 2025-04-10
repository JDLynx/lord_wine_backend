import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import CarritoDeCompras from './carrito_de_compras';

@Table({ tableName: 'DetalleCarrito', timestamps: false })
export class DetalleCarrito extends Model
{
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    detIdDetalle!: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    detCantidad!: number;

    @Column({ type: DataType.FLOAT, allowNull: false })
    detSubtotal!: number;

    @ForeignKey(() => CarritoDeCompras)
    @Column({ type: DataType.STRING(50), allowNull: false })
    carIdCarrito!: string;

    @BelongsTo(() => CarritoDeCompras)
    carrito!: CarritoDeCompras;
}

export default DetalleCarrito;