import { Bill } from "src/bill/bill.entity";
import { Product } from "src/product/product.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

@Entity()
export class BillDetail {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    billId : number;
    @ManyToOne (()=>Bill, bill => bill.billDetails)
    bill:Bill;

    @Column()
    productId: number;
    @ManyToOne(()=>Product, product => product.billDetails)
    product:Product;

    @Column()
    quantity: number;

    @Column("decimal",{precision:15, scale:2})
    price:number
}