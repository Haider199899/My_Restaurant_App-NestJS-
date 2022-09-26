/* eslint-disable prettier/prettier */
import { DataTypes} from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Menu } from './restaurant_menu.model';



@Table
export class Order extends Model<Order> {

  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id;
 @Column(DataTypes.ARRAY(DataTypes.TEXT))
  order_items:[Menu];

 @Column(DataType.INTEGER)
  total_price;

}