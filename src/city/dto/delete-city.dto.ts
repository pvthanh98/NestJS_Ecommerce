import {IsNumber} from 'class-validator';
export class DeleteCityDto {
    @IsNumber()
    id: number;
}