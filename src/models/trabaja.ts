import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Empleado } from './empleado';
import { TiendaFisica } from './tienda_fisica';

@Table({ tableName: 'TrabajaEmpleadoTiendaFisica' }) export class TrabajaEmpleadoTiendaFisica extends Model<TrabajaEmpleadoTiendaFisica>
{

  @ForeignKey(() => Empleado)
  @Column({ primaryKey: true })
  emplCodEmpleado!: number;

  @ForeignKey(() => TiendaFisica)
  @Column({ primaryKey: true })
  tiendIdTiendaFisica!: number;
}

export default TrabajaEmpleadoTiendaFisica;