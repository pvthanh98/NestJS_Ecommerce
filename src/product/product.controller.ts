import { Body, Controller, Delete, Get, Post, Put, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';
import { DeleteProductDto } from './dto/delete-product.dto';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  getAll() {
      return this.productService.getAll();
  }

  @Post()
  create(@Body(ValidationPipe) body : CreateProductDto) {
      return this.productService.create(body);
  } 

  @Put()
  update(@Body(ValidationPipe) product : UpdateProductDto){
    return this.productService.update(product);
  }

  @Delete()
  delete(@Body(ValidationPipe) product: DeleteProductDto) {
    return this.productService.delete(product.id);
  }

}
