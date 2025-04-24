import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Cliente } from './cliente';
import { Empleado } from './empleado';
import { ServicioEmpresarial } from './servicio_empresarial';
import { DetallePedido } from './detalle_pedido';

@Table({ tableName: 'Pedido' }) export class Pedido extends Model<Pedido>
{
    @Column({ primaryKey: true, autoIncrement: true })
    pedIdPedido!: number;

    @Column({ type: DataType.DATE, allowNull: false })
    pedFecha!: Date;

    @Column({ type: DataType.INTEGER, allowNull: false })
    pedTotal!: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    pedEstado!: string;

    @ForeignKey(() => Cliente)
    @Column({ allowNull: false })
    clCodCliente!: number;

    @BelongsTo(() => Cliente)
    cliente!: Cliente;

    @ForeignKey(() => Empleado)
    @Column({ allowNull: false })
    emplCodEmpleado!: number;

    @BelongsTo(() => Empleado)
    empleado!: Empleado;

    @ForeignKey(() => ServicioEmpresarial)
    @Column({ allowNull: false })
    serIdServicioEmpresarial!: number;

    @BelongsTo(() => ServicioEmpresarial)
    servicioEmpresarial!: ServicioEmpresarial;

    @HasMany(() => DetallePedido)
    detallesPedido!: DetallePedido[];
}

export default Pedido;