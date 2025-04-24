import { Table, Column, Model, DataType, HasOne, HasMany } from 'sequelize-typescript';
import { CarritoDeCompras } from './carrito_de_compras';
import { Pedido } from './pedido';

@Table({ tableName: 'Cliente' }) export class Cliente extends Model<Cliente>
{
    @Column({ primaryKey: true, autoIncrement: true })
    clCodCliente!: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    clIdCliente!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    clNombre!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    clDireccion!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    clTelefono!: string;

    @Column({ type: DataType.STRING(50), allowNull: false, unique: true })
    clCorreoElectronico!: string;

    @HasOne(() => CarritoDeCompras)
    carritoDeCompras!: CarritoDeCompras;

    @HasMany(() => Pedido)
    pedidos!: Pedido[];
}

export default Cliente;