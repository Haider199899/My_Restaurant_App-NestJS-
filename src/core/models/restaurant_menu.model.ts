/* eslint-disable prettier/prettier */
import { DataTypes} from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';


@Table
export class Menu extends Model<Menu> {

  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id;
 @Column(DataType.STRING)
  item: string;

 @Column(DataType.STRING)
  price: string;

 @Column(DataType.ENUM('Appetizer','Pakistani','Desserts'))
  category: any;
  
}