import { Permission } from "src/permission/permission.entity";
import { User } from "src/user/user.entity";
import {Entity, PrimaryGeneratedColumn, ManyToOne, Column} from "typeorm";

@Entity()
export class UserPermission {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;
    @ManyToOne(()=>User, user=>user.userPermissions)
    user:User;

    @Column()
    permissionId: number;
    @ManyToOne(()=>Permission, permission=>permission.userPermissions)
    permission:Permission;

}