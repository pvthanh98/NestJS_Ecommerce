import { Address } from '../address/address.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Bill } from 'src/bill/bill.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:45})
  name: string;

  @Column({length:45})
  email: string;

  @Column({length:20})
  phoneNumber: string;

  @Column({length:45})
  password: string;
  
  @Column({length:45})
  salt: string;

  @OneToMany(()=>Address, address => address.customer)
  addresses: Address;

  @OneToMany(() => Bill, bill=> bill.customer)
  bills:Bill[];
}