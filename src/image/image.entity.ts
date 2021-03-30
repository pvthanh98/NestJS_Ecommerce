import { Product } from "src/product/product.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:100})
    url: string;

    @Column({length:50})
    publicId: string;

    @ManyToOne(()=>Product, product => product.images)
    product:Product;
}