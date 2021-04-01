import { Customer } from "../customer/customer.entity";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { City } from "../city/city.entity";
import { District } from "src/district/district.entity";
import { Ward } from "src/ward/ward.entity";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:100})
    address: string;

    @Column()
    customerId: number;
    @ManyToOne(()=>Customer, customer => customer.addresses)
    @JoinColumn({name:"customerId"})
    customer: Customer;

    
    @Column()
    cityId: number;
    @ManyToOne(()=>City, city => city.addresses)
    @JoinColumn({name:"cityId"})
    city:City;

    
    @Column()
    districtId: number;
    @ManyToOne(()=> District, district => district.addresses)
    @JoinColumn({name:"districtId"})
    district:District;

    
    @Column()
    wardId: number;
    @ManyToOne(()=>Ward, ward=>ward.addresses)
    @JoinColumn({name:"wardId"})
    ward:Ward;

    

}