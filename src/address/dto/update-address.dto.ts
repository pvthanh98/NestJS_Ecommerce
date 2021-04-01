import {IsNumber, IsString} from 'class-validator';
export class UpdateAddressDto {
    @IsNumber()
    id:number;

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