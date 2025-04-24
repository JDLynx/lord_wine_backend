import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Cliente } from './cliente';
import { CarritoDeCompras } from './carrito_de_compras';

@Table({ tableName: 'TieneClienteCarritoDeCompras', timestamps: false }) export class TieneClienteCarritoDeCompras extends Model<TieneClienteCarritoDeCompras>
{
    @ForeignKey(() => Cliente)
    @Column
    clCodCliente!: number;

    @ForeignKey(() => CarritoDeCompras)
    @Column
    carIdCarritoDeCompras!: number;
}

export default TieneClienteCarritoDeCompras;