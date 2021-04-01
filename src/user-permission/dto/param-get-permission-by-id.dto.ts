import {IsNumber} from 'class-validator';
export class FindPermissionByUserId {
    @IsNumber()
    id:number;
}