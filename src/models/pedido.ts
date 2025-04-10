import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Cliente from './cliente';
import Empleado from './empleado';
import ServicioEmpresarial from './servicio_empresarial';

@Table({ tableName: 'Pedido', timestamps: false })
export class Pedido extends Model
{
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    pedIdPedido!: string;

    @Column({ type: DataType.DATE, allowNull: false })
    pedIdFecha!: Date;

    @Column({ type: DataType.INTEGER, allowNull: false })
    pedTotal!: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    pedEstado!: string;

    @ForeignKey(() => Cliente)
    @Column({ type: DataType.STRING(50), allowNull: false })
    clCodCliente!: string;

    @ForeignKey(() => Empleado)
    @Column({ type: DataType.STRING(50), allowNull: false })
    emplCodEmpleado!: string;

    @ForeignKey(() => ServicioEmpresarial)
    @Column({ type: DataType.STRING(50), allowNull: false })
    serIdServicio!: string;

    @BelongsTo(() => Cliente)
    cliente!: Cliente;

    @BelongsTo(() => Empleado)
    empleado!: Empleado;

    @BelongsTo(() => ServicioEmpresarial)
    servicioEmpresarial!: ServicioEmpresarial;
}

export default Pedido;