import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne, BelongsToMany } from 'sequelize-typescript';
import { Administrador } from './administrador';
import { Empleado } from './empleado';
import { InventarioTienda } from './inventario_tienda';
import { Producto } from './producto';
import { TieneTiendaProducto } from './tiene_tienda_producto';

@Table({ tableName: 'TiendaFisica' }) export class TiendaFisica extends Model<TiendaFisica>
{
    @Column({ primaryKey: true, autoIncrement: true })
    tiendIdTiendaFisica!: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    tiendNombre!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    tiendDireccion!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    tiendTelefono!: string;

    @ForeignKey(() => Administrador)
    @Column({ allowNull: false })
    adminCodAdministrador!: number;

    @BelongsTo(() => Administrador)
    administrador!: Administrador;

    @HasOne(() => Empleado)
    empleado!: Empleado;

    @HasOne(() => InventarioTienda)
    inventarioTienda!: InventarioTienda;

    @BelongsToMany(() => Producto, () => TieneTiendaProducto)
    productos!: Producto[];
}

export default TiendaFisica;