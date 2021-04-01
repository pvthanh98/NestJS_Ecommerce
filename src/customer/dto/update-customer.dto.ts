import {IsEmail, IsNumber, IsPhoneNumber, IsString} from 'class-validator';
export class UpdateCustomerDto {

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsPhoneNumber()
    phoneNumber:string;
}