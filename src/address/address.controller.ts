import { Body, Controller, Delete, Get, Post, Put, ValidationPipe } from '@nestjs/common';
import {AddressService} from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { DeleteAddressDto } from './dto/delete-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService){}
    @Post()
    createAddress(@Body(ValidationPipe) address: CreateAddressDto) {
        return this.addressService.createAddress(address); 
    }
    
    @Get()
    getAll(){
        return this.addressService.getAll();
    }

    @Get("relation")
    getAllByRelation(){
        return this.addressService.getAllByRelation();
    }

    @Delete()
    deleteById(@Body(ValidationPipe) body : DeleteAddressDto) {
        return this.addressService.deleteById(body.id);
    }

    @Put()
    update (@Body(ValidationPipe) newAddress: UpdateAddressDto){
        return this.addressService.update(newAddress);
    }
}
