import { Address } from 'src/address/address.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {District} from '../district/district.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:45})
  name: string;

  @OneToMany(()=> District, district => district.city)
  districts : District[];

  @OneToMany(()=>Address, address => address.city)
  addresses: Address[];
}