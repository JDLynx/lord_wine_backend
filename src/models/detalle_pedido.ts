import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Pedido from './pedido';
import Producto from './producto';

@Table({ tableName: 'DetallePedido', timestamps: false })
export class DetallePedido extends Model
{
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    detaIdDetalle!: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    detaCantidad!: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    detaPrecioUnitario!: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    detaSubtotal!: number;

    @ForeignKey(() => Pedido)
    @Column({ type: DataType.STRING(50), allowNull: false })
    pedIdPedido!: string;

    @ForeignKey(() => Producto)
    @Column({ type: DataType.STRING(50), allowNull: false })
    prodCodProducto!: string;

    @BelongsTo(() => Pedido)
    pedido!: Pedido;

    @BelongsTo(() => Producto)
    producto!: Producto;
}

export default DetallePedido;