import {IsEmail, IsPhoneNumber, IsString, MinLength} from 'class-validator';
export class CreateCustomerDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    phoneNumber:string;

}