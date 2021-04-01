import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError } from 'src/database/error-handler';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  getAll() {
    return this.productRepository.find();
  }

  async create(product: CreateProductDto): Promise<Product> {
    try {
      return await this.productRepository.save(product);
    } catch (e) {
      catchError(e);
    }
  }

  async update(newProduct: UpdateProductDto): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id: newProduct.id },
    });
    if (!product)
      throw new NotFoundException({
        code: 'NOT_FOUND_EXCEPTION',
        message: 'PRODUCT_NOT_FOUND',
      });
    try {
      product.name = newProduct.name;
      product.price = newProduct.price;
      product.quantity = newProduct.quantity;
      product.thumbnail = newProduct.thumbnail;
      return await this.productRepository.save(product);
    } catch (e) {
      catchError(e);
    }
  }

  delete (id: number): Promise<any> {
      return this.productRepository.delete({id})
  }
}
