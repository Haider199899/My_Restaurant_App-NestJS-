/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty } from "class-validator";
import { User } from "src/core/models/user.model";
enum UserType {
    OWNER = 'Owner',
    EMPLOYEE='Employee'
}
export class CreateProfileDto {
    user_id:User;
    @IsNotEmpty()
    @IsEnum(UserType)
    user_type;
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    address:string;
    @IsNotEmpty()
    date_of_birth:any;


}
