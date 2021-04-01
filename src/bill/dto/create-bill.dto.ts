import { IsString, IsNumber, IsBoolean, IsPhoneNumber } from 'class-validator';
export class CreateBillDto {

  @IsNumber()
  totalCost: number;

  @IsString()
  deliveryAddress: string;

  @IsNumber()
  customerId: number;

  @IsNumber()
  userId: number;

  @IsBoolean()
  isPaid: boolean;

  @IsString()
  status: string;

  paymentDate: Date;

  @IsPhoneNumber()
  deliveryPhoneNumber: string;
}
