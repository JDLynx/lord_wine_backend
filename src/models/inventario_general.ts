import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'InventarioGeneral', timestamps: false })
export class InventarioGeneral extends Model
{
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    invGenIdInventarioGeneral!: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    invGenCantidadTotal!: number;
}

export default InventarioGeneral;