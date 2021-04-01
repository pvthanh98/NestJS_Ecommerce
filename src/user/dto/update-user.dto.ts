import {IsString, IsNumber, IsPhoneNumber} from 'class-validator';
export class UpdateUserDto {
    @IsNumber()
    id: number;
    @IsString()
    name: string;
    @IsNumber()
    typeAccount: number;

    @IsPhoneNumber()
    phoneNumber: string;
}