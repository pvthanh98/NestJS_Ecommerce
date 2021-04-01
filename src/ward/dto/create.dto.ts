import { IsString, IsNumber } from 'class-validator';
export class CreateWardDto {
    @IsString()
    name: string;
    @IsNumber()
    districtId: number;
}