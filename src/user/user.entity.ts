import { Bill } from 'src/bill/bill.entity';
import { UserPermission } from 'src/user-permission/user-permission.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Unique } from 'typeorm';
@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:45})
  name: string;

  @Column({length:100})
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({length:25})
  phoneNumber: string;

  @Column()
  typeAccount: number

  @Column({length:50})
  salt: string

  @OneToMany(()=>UserPermission, userPermission=>userPermission.user)
  userPermissions:UserPermission[];

  @OneToMany(()=>Bill, bill => bill.user)
  bills:Bill[];
}