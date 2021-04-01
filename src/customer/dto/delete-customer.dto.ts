import {IsNumber} from 'class-validator';
export class DeleteCustomerDto {
    @IsNumber()
    id:number;
}