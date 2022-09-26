/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty } from "class-validator";

enum itemType {
    APPETIZER = 'Appetizer',
    PAKISTANI='Pakistani',
    DESSERTS='Desserts',
    FASTFOOD='Fastfood',
    DRINKS='Drinks',

}
export class CreateMenuDto {
    @IsNotEmpty()
    item:string;
    @IsNotEmpty()
    price:any;
    @IsNotEmpty()
    @IsEnum(itemType)
    category:any;
}
