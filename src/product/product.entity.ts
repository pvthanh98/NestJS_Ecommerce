import { BillDetail } from 'src/bill-detail/bill-detail.entity';
import { Image } from 'src/image/image.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:45})
  name: string;

  @Column("decimal",{precision:15, scale:2})
  price: number;

  @Column()
  quantity: number;

  @Column({length:100})
  thumbnail: string;
  
  @OneToMany(()=>BillDetail, billDetail=>billDetail.product)
  billDetails:BillDetail[];

  @OneToMany(()=>Image, image=>image.product)
  images: Image[];
}
