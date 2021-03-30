import { BillDetail } from "src/bill-detail/bill-detail.entity";
import { Customer } from "src/customer/customer.entity";
import { User } from "src/user/user.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToMany} from "typeorm";

@Entity()
export class Bill {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"timestamp", default: ()=> "CURRENT_TIMESTAMP"})
    createdAt: string;

    @Column("decimal",{precision:15, scale:2})
    totalCost: number;

    @Column()
    isPaid: boolean;

    @Column({length:45})
    status: string;

    @Column({default:null})
    paymentDate: Date;

    @Column({length:100})
    deliveryAddress: string;

    @Column({length:20})
    deliveryPhoneNumber: string;

    @ManyToOne(()=>Customer, customer => customer.bills)
    customer:Customer;

    @ManyToOne(()=>User, user=> user.bills)
    user:User;

    @OneToMany(()=>BillDetail, billDetail => billDetail.bill)
    billDetails:BillDetail[];
}