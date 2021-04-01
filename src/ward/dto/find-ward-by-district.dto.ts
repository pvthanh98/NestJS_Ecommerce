import { IsNumber } from 'class-validator';
export class FindwardByDistrictDto {
    @IsNumber()
    id: number;
}