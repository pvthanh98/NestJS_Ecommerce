import { Body, Controller, Delete, Get, Post, Put, ValidationPipe, UseGuards } from '@nestjs/common';
import {AddressService} from './address.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateAddressDto } from './dto/create-address.dto';
import { DeleteAddressDto } from './dto/delete-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    createAddress(@Body(ValidationPipe) address: CreateAddressDto) {
        return this.addressService.createAddress(address); 
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(){
        return this.addressService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get("relation")
    getAllByRelation(){
        return this.addressService.getAllByRelation();
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    deleteById(@Body(ValidationPipe) body : DeleteAddressDto) {
        return this.addressService.deleteById(body.id);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    update (@Body(ValidationPipe) newAddress: UpdateAddressDto){
        return this.addressService.update(newAddress);
    }
}
