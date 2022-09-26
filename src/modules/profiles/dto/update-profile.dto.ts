/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    address:string;
    @IsNotEmpty()
    date_of_birth:any;
}
