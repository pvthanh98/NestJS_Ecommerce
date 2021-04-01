import {
  Body,
  Controller,
  Post,
  ValidationPipe,
  UseGuards,
  Get,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DeleteCustomerDto } from './dto/delete-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  insertCustomer(@Body(ValidationPipe) customer: CreateCustomerDto) {
    return this.customerService.insertCustomer(customer);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUser() {
    return this.customerService.findAllCustomer();
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteCustomer(@Body(ValidationPipe) body: DeleteCustomerDto) {
    return this.customerService.deleteCustomer(body.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateCustomer(@Body(ValidationPipe) customerInfo: UpdateCustomerDto) {
    return this.customerService.updateCustomer(customerInfo);
  }

  @Get('id/:id')
  findUserById(@Param() params) {
    return this.customerService.findCustomerById(params.id);
  }
}
