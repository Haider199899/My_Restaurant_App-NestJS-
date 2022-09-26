/* eslint-disable prettier/prettier */
import { EnumDataType } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript'


@Table
export class User extends Model<User> {
   

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  password: string;

 @Column(DataType.ENUM('Owner','Employee'))
  user_type: any;

  @Column(DataType.BOOLEAN)
  isActive: boolean;
  
}