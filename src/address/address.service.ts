import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError } from 'src/database/error-handler';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Customer } from '../customer/customer.entity';
import { Ward } from '../ward/ward.entity';
import { District } from 'src/district/district.entity';
import { City } from 'src/city/city.entity';
@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}
  async createAddress(address: CreateAddressDto): Promise<Address> {
    try {
      return await this.addressRepository.save(address);
    } catch (e) {
      catchError(e);
    }
  }

  getAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  getAllByRelation(): Promise<Address[]> {
    return this.addressRepository
      .createQueryBuilder('address')
      .select([
        'address.id',
        'address.address',
        'customer.id',
        'customer.name',
        'ward',
        'district',
        'city',
      ])
      .leftJoin('address.customer', 'customer')
      .leftJoin('address.ward', 'ward')
      .leftJoin('address.city', 'city')
      .leftJoin('address.district', 'district')
      .getMany();
  }

  deleteById(id: number): Promise<any> {
    return this.addressRepository.delete({ id: id });
  }

  async update(newAddress: UpdateAddressDto): Promise<Address> {
    const address = await this.addressRepository.findOne({
      where: { id: newAddress.id },
    });
    if (!address)
      throw new NotFoundException({
        code: 'NOT_FOUND_EXCEPTION',
        message: 'ADDRESS_NOT_FOUND',
      });
    address.address = newAddress.address;
    address.customerId = newAddress.customerId;
    address.cityId = newAddress.cityId;
    address.districtId = newAddress.districtId;
    address.wardId = newAddress.wardId;

    try {
      return await this.addressRepository.save(address);
    } catch (e) {
      catchError(e);
    }
  }
}
