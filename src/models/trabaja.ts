import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Empleado from './empleado';
import TiendaFisica from './tienda_fisica';

@Table({ tableName: 'Trabaja', timestamps: false })
export class Trabaja extends Model
{
    @ForeignKey(() => Empleado)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    emplCodEmpleado!: string;

    @ForeignKey(() => TiendaFisica)
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    tiendIdTienda!: string;

    @BelongsTo(() => Empleado)
    empleado!: Empleado;

    @BelongsTo(() => TiendaFisica)
    tiendaFisica!: TiendaFisica;
}

export default Trabaja;