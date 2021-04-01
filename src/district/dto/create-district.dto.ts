import { IsString, IsNumber } from 'class-validator';
export class CreateDistrictDto {
    @IsString()
    name: string;
    
    @IsNumber()
    cityId:number;
}