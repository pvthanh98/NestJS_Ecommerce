import {IsNumber, IsString} from 'class-validator';
export class CreateAddressDto {
    @IsString()
    address: string;

    @IsNumber()
    customerId: number;

    @IsNumber()
    cityId: number;

    @IsNumber()
    districtId: number;

    @IsNumber()
    wardId: number;
}