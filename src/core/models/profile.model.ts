/* eslint-disable prettier/prettier */
import {DataTypes} from 'sequelize'
import { Column, DataType, Model, Table,ForeignKey } from 'sequelize-typescript';
import { User } from './user.model';


@Table
export class Profile extends Model<Profile> {

  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  user_id: any;

 @Column(DataType.ENUM('Owner','Employee'))
  user_type:any;
  
 @Column(DataType.STRING)
  name: string;

 @Column(DataType.STRING)
  address: string;

 @Column(DataType.STRING)
  date_of_birth: string;

  
}