import {IsString, IsNumber} from 'class-validator';
export class UpdateWardDto {
    @IsNumber()
    id:number;

    @IsString()
    name: string;

    @IsNumber()
    districtId:number;

}