import { Permission } from "src/permission/permission.entity";
import { User } from "src/user/user.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany} from "typeorm";

@Entity()
export class UserPermission {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>User, user=>user.userPermissions)
    user:User;

    @ManyToOne(()=>Permission, permission=>permission.userPermissions)
    permission:Permission;

}