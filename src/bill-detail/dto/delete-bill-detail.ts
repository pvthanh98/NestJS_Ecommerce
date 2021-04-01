import {IsString, IsNumber } from 'class-validator';
export class DeleteBillDetailDto {
    @IsNumber()
    billId: number;

    @IsNumber()
    productId: number;
}