/* eslint-disable prettier/prettier */
import { DataTypes } from 'sequelize';
import { Column, DataType, Model, Table,ForeignKey } from 'sequelize-typescript';
import { Profile } from './profile.model';



@Table
export class Restaurant extends Model<Restaurant> {

  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id;

 @Column(DataType.STRING)
  name: string;

 @Column(DataType.STRING)
  address: string;

  @Column(DataType.STRING)
  contact_num: string;

  @ForeignKey(() => Profile)
 @Column(DataType.UUID)

  user_id;
 

  
}