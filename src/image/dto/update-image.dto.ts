import { IsNumber, IsString } from 'class-validator';
export class UpdateImageDto { 
    @IsNumber()
    id: number;

    @IsString()
    url: string;

    @IsNumber()
    productId: number;

    @IsNumber()
    publicId: number;
}