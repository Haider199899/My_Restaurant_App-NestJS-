/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';
enum itemType {
    APPETIZER = 'Appetizer',
    PAKISTANI='Pakistani',
    DESSERTS='Desserts',
    FASTFOOD='Fastfood',
    DRINKS='Drinks',

}
export class UpdateMenuDto extends PartialType(CreateMenuDto) {
    @IsNotEmpty()
    item:string;
    @IsNotEmpty()
    price:any;
    @IsNotEmpty()
    @IsEnum(itemType)
    category:any;
}
