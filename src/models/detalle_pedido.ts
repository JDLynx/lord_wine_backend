import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Pedido } from './pedido';
import { Producto } from './producto';

@Table({ tableName: 'DetallePedido' }) export class DetallePedido extends Model<DetallePedido>
{
    @Column({ primaryKey: true, autoIncrement: true })
    detaIdDetallePedido!: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    detaCantidad!: number;

    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    detaPrecioUnitario!: number;

    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    detaSubtotal!: number;

    @ForeignKey(() => Pedido)
    @Column({ allowNull: false })
    pedIdPedido!: number;

    @BelongsTo(() => Pedido)
    pedido!: Pedido;

    @ForeignKey(() => Producto)
    @Column({ allowNull: false })
    prodIdProducto!: number;

    @BelongsTo(() => Producto)
    producto!: Producto;
}

export default DetallePedido;