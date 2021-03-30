import { Customer } from "../customer/customer.entity";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { City } from "../city/city.entity";
import { District } from "src/district/district.entity";
import { Ward } from "src/ward/ward.entity";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:100})
    address: string;

    @ManyToOne(()=>Customer, customer => customer.addresses)
    customer: Customer;

    @ManyToOne(()=>City, city => city.addresses)
    city:City;

    @ManyToOne(()=> District, district => district.addresses)
    district:District;

    @ManyToOne(()=>Ward, ward=>ward.addresses)
    ward:Ward;

}