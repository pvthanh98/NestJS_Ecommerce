import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { DeleteCityDto } from 'src/city/dto/delete-city.dto';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}
  @Post()
  createDistrict (@Body(ValidationPipe) body: CreateDistrictDto) {
    return this.districtService.createDistrict(body);
  }

  @Get("all")
  getAll() {
      return this.districtService.getAllDistrict();
  }

  @Get("city_id/:id")
  getByCityId(@Param() params) {
      return this.districtService.getByCityId(params.id)
  }

  @Put()
  updateDistrict (@Body(ValidationPipe) body : UpdateDistrictDto) {
    return this.districtService.updateDistrict(body);
  }

  @Delete()
  deleteDistrict(@Body(ValidationPipe) body: DeleteCityDto) {
    return this.districtService.deleteDistrict(body.id);
  }
  
}
