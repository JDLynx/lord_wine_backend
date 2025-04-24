import { Table, Column, Model, DataType, HasMany, HasOne } from 'sequelize-typescript';
import { Producto } from './producto';
import { InventarioGeneral } from './inventario_general';
import { TiendaFisica } from './tienda_fisica';
import { Empleado } from './empleado';

@Table({ tableName: 'Administrador' }) export class Administrador extends Model<Administrador>
{
    @Column({ primaryKey: true, autoIncrement: true })
    adminCodAdministrador!: number;

    @Column({ type: DataType.STRING(50), allowNull: false, unique: true })
    adminIdAdministrador!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    adminNombre!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    adminDireccion!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    adminTelefono!: string;

    @Column({ type: DataType.STRING(50), allowNull: false, unique: true })
    adminCorreoElectronico!: string;

    @HasMany(() => Producto)
    productos!: Producto[];

    @HasOne(() => InventarioGeneral)
    inventarioGeneral!: InventarioGeneral;

    @HasMany(() => TiendaFisica)
    tiendasFisicas!: TiendaFisica[];

    @HasMany(() => Empleado)
    empleados!: Empleado[];
}

export default Administrador;