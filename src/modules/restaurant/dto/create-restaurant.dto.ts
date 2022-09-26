/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty } from "class-validator";
import { Profile } from "src/core/models/profile.model";
enum UserType {
    OWNER = 'Owner',
}
export class CreateRestaurantDto {
    user_id:Profile
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    address:string;
    @IsNotEmpty()
    contact_num:any;


}
