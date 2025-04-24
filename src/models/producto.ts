import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, HasOne, BelongsToMany } from 'sequelize-typescript';
import { Administrador } from './administrador';
import { Categoria } from './categoria';
import { DetallePedido } from './detalle_pedido';
import { DetalleCarrito } from './detalle_carrito';
import { InventarioTienda } from './inventario_tienda';
import { TiendaFisica } from './tienda_fisica';
import { TieneInventarioTiendaProducto } from './tiene_inventario_tienda_producto';
import { TieneTiendaProducto } from './tiene_tienda_producto';

@Table({ tableName: 'Producto' }) export class Producto extends Model<Producto>
{
    @Column({ primaryKey: true, autoIncrement: true })
    prodIdProducto!: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    prodNombre!: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    prodDescripcion!: string;

    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    prodPrecio!: number;

    @ForeignKey(() => Administrador)
    @Column({ allowNull: false })
    adminCodAdministrador!: number;

    @BelongsTo(() => Administrador)
    administrador!: Administrador;

    @ForeignKey(() => Categoria)
    @Column({ allowNull: false })
    categIdCategoria!: number;

    @BelongsTo(() => Categoria)
    categoria!: Categoria;

    @HasMany(() => DetallePedido)
    detallesPedido!: DetallePedido[];

    @HasOne(() => DetalleCarrito)
    detalleCarrito!: DetalleCarrito;

    @BelongsToMany(() => InventarioTienda, () => TieneInventarioTiendaProducto)
    inventariosTienda!: InventarioTienda[];

    @BelongsToMany(() => TiendaFisica, () => TieneTiendaProducto)
    tiendasFisicas!: TiendaFisica[];
}

export default Producto;