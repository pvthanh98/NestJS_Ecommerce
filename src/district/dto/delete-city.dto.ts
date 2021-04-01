import {IsNumber} from 'class-validator';
export class DeleteDistrictDto {
    @IsNumber()
    id:number;
} 