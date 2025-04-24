import { Table, Column, Model, DataType, HasMany, HasOne } from 'sequelize-typescript';
import { DetalleCarrito } from './detalle_carrito';
import { Cliente } from './cliente';

@Table({ tableName: 'CarritoDeCompras' }) export class CarritoDeCompras extends Model<CarritoDeCompras>
{
    @Column({ primaryKey: true, autoIncrement: true })
    carIdCarritoDeCompras!: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    carEstado!: string;

    @HasMany(() => DetalleCarrito)
    detallesCarrito!: DetalleCarrito[];

    @HasOne(() => Cliente)
    cliente!: Cliente;
}

export default CarritoDeCompras;