import { Address } from "src/address/address.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import {District} from "../district/district.entity";

@Entity()
export class Ward {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:45})
    name: string;

    @Column()
    districtId: number;

    @ManyToOne(() => District, district => district.wards)
    district: District;

    @OneToMany(()=>Address, address=>address.ward)
    addresses: Address[];

}