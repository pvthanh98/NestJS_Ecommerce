import { IsNumber } from 'class-validator';
export class UpdateBillDetailDto {
  @IsNumber()
  productId: number;
  @IsNumber()
  billId: number;
  @IsNumber()
  quantity: number;
  @IsNumber()
  price: number;
}
