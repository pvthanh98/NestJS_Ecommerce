import {IsEmail, IsPhoneNumber, IsString, MinLength} from 'class-validator';
export class CreateCustomerDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    password:string;

    @IsPhoneNumber()
    phoneNumber:string;

    salt: string;
}