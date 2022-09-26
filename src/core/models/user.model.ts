/* eslint-disable prettier/prettier */

import { DataTypes } from 'sequelize';
import { Column, DataType, Model, Table} from 'sequelize-typescript'


@Table
export class User extends Model<User> {


  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  password: string;

 @Column(DataType.ENUM('Owner','Employee'))
  user_type: any;

  @Column(DataType.BOOLEAN)
  isActive: boolean;
  
}