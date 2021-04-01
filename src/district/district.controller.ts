import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe, UseGuards } from '@nestjs/common';
import { DeleteCityDto } from 'src/city/dto/delete-city.dto';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createDistrict (@Body(ValidationPipe) body: CreateDistrictDto) {
    return this.districtService.createDistrict(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get("all")
  getAll() {
      return this.districtService.getAllDistrict();
  }

  @UseGuards(JwtAuthGuard)
  @Get("city_id/:id")
  getByCityId(@Param() params) {
      return this.districtService.getByCityId(params.id)
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateDistrict (@Body(ValidationPipe) body : UpdateDistrictDto) {
    return this.districtService.updateDistrict(body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteDistrict(@Body(ValidationPipe) body: DeleteCityDto) {
    return this.districtService.deleteDistrict(body.id);
  }
  
}
