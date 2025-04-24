import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, HasOne } from 'sequelize-typescript';
import { Administrador } from './administrador';
import { Pedido } from './pedido';
import { TiendaFisica } from './tienda_fisica';
import { InventarioTienda } from './inventario_tienda';

@Table({ tableName: 'Empleado' }) export class Empleado extends Model<Empleado>
{
    @Column({ primaryKey: true, autoIncrement: true })
    emplCodEmpleado!: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    emplIdEmpleado!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    emplNombre!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    emplDireccion!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    emplTelefono!: string;

    @Column({ type: DataType.STRING(50), allowNull: false, unique: true })
    emplCorreoElectronico!: string;

    @ForeignKey(() => Administrador)
    @Column({ allowNull: false })
    adminCodAdministrador!: number;

    @BelongsTo(() => Administrador)
    administrador!: Administrador;

    @HasMany(() => Pedido)
    pedidos!: Pedido[];

    @HasOne(() => TiendaFisica)
    tiendaFisica!: TiendaFisica;

    @HasOne(() => InventarioTienda)
    inventarioTienda!: InventarioTienda;
}

export default Empleado;