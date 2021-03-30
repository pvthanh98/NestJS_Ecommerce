import { UserPermission } from 'src/user-permission/user-permission.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:45})
  name: string;

  @OneToMany(()=>UserPermission, userPermission => userPermission.permission)
  userPermissions: UserPermission[];

}