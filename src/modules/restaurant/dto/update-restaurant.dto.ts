/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    address:string;
    @IsNotEmpty()
    contact_num:any;
}
