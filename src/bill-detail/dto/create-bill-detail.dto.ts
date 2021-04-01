import {IsString, IsNumber } from 'class-validator';
export class CreateBillDetailDto {
    @IsNumber()
    productId: number;
    @IsNumber()
    billId: number;
    @IsNumber()
    quantity: number;
    @IsNumber()
    price: number;
}