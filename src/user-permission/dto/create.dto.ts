import { IsNumber } from 'class-validator';
export class CreateUserPermissionDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  permissionId: number;
}
