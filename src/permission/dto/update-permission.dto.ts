import {IsNumber, IsString} from 'class-validator';
export class UpdatePermissionDto {
    @IsNumber()
    id: number;
    @IsString()
    name: string;
}