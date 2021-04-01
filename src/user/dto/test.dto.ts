import {IsString, IsNumber} from 'class-validator';
export class TestDto {
   @IsString({message:"please input correct name"})
   name: string;
   @IsNumber()
   old: number; 
}