import { IsString, IsNumber } from "class-validator";
export class UpdateProductDto {
    @IsNumber()
    id: number;
    
    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsNumber()
    quantity: number;

    @IsString()
    thumbnail: string;
}