import {IsNumber} from 'class-validator';
export class DeleteUserPermissionByUserIdDto {
    @IsNumber()
    userId:number;
}