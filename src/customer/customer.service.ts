import {
  Get,
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { catchError } from '../database/error-handler';
@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async insertCustomer(customer: CreateCustomerDto): Promise<any> {
    try {
      return await this.customerRepository.save(customer);
    } catch (e) {
      throw new NotImplementedException({
        code: 'NOT_IMPLEMENTED_EXCEPTION',
        message: 'CANNOT_CREAT_CUSTOMER',
      });
    }
  }

  findAllCustomer(): Promise<Customer[]> {
    return this.customerRepository.find({
      select: ['id', 'name', 'email', 'phoneNumber'],
    });
  }

  async deleteCustomer(id: number): Promise<any> {
    try {
      const customer = await this.customerRepository.delete({});
      return customer;
    } catch (e) {
      throw new NotImplementedException({
        code: 'NOT_IMPLEMENTED_EXCEPTION',
        message: 'CANNOT_DELETE_RECORD',
      });
    }
  }

  async updateCustomer(customerInfo: UpdateCustomerDto): Promise<any> {
    const customer = await this.customerRepository.findOne({
      id: customerInfo.id,
    });
    if (customer) {
    } else
      throw new NotFoundException({
        code: 'NOT_FOUND_EXCEPTION',
        message: 'CUSTOMER_NOT_FOUND',
      });

    customer.name = customerInfo.name;
    customer.phoneNumber = customerInfo.phoneNumber;

    try {
      return  await this.customerRepository.save(
        customer,
      );
    } catch (e) {
      catchError(e);
    }
  }

  async findCustomerById(customerId: number): Promise<Customer> {
    const customer = await this.customerRepository.findOne({
      where: {
        id: customerId,
      },
    });
    if(customer) return customer;
    throw new NotFoundException({
        code:"NOT_FOUND_EXCEPTION",
        message:"CUSTOMER_NOT_FOUND"
    })
  }
}
