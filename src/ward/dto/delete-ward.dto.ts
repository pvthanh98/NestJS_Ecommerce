import { IsNumber } from 'class-validator';
export class DeleteWardDto {
    @IsNumber()
    id: number;
}