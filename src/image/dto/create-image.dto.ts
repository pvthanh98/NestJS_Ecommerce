import { IsNumber, IsString } from 'class-validator';
export class CreateImageDto { 
    @IsString()
    url: string;

    @IsNumber()
    productId: number;

    @IsNumber()
    publicId: number;
}