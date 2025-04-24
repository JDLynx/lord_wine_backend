import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';
import { CarritoDeCompras } from './carrito_de_compras';
import { Producto } from './producto';

@Table({ tableName: 'DetalleCarrito' }) export class DetalleCarrito extends Model<DetalleCarrito>
{
    @Column({ primaryKey: true, autoIncrement: true })
    detIdDetalleCarrito!: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    detCantidad!: number;

    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    detSubtotal!: number;

    @ForeignKey(() => CarritoDeCompras)
    @Column({ allowNull: false })
    carIdCarritoDeCompras!: number;

    @BelongsTo(() => CarritoDeCompras)
    carritoDeCompras!: CarritoDeCompras;

    @HasOne(() => Producto)
    producto!: Producto;
}

export default DetalleCarrito;