import {IsString, IsNumber} from 'class-validator';
export class UpdateCityDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;
}