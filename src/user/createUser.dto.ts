import {IsString, IsEmail, MinLength, IsNumber} from 'class-validator';
export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;
    
    @IsString()
    @MinLength(8)
    password: string;

    @IsNumber()
    typeAccount: number;
    
    salt: string;
}