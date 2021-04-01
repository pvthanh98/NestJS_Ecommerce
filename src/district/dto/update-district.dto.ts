import {IsString, IsNumber} from 'class-validator';
export class UpdateDistrictDto {
    @IsNumber()
    id: number;
    @IsString()
    name: string;
    @IsNumber()
    cityId: number;
}