import { Address } from "src/address/address.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import {City} from "../city/city.entity";
import {Ward} from "../ward/ward.entity";
@Entity()
export class District {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:45})
    name: string;

    @Column ()
    cityId: number;

    @ManyToOne(() => City, city => city.districts)
    city: City;

    @OneToMany(()=>Ward, ward => ward.district)
    wards: Ward[];

    @OneToMany(()=>Address, address=> address.district)
    addresses: Address[];

}