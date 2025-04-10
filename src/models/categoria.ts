import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Categoria', timestamps: false })
export class Categoria extends Model
{
    @Column({ primaryKey: true, type: DataType.STRING(50), allowNull: false })
    categIdCategoria!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    catNombre!: string;
}

export default Categoria;