export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    typeAccount: number;
    salt: string;
}