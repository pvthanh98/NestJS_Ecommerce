import { Body, Controller, Delete, Get, Post, Put, ValidationPipe } from '@nestjs/common';
import { CityService } from "./city.service";
import { CreateCityDto } from "./dto/create-city.dto";
import { DeleteCityDto } from './dto/delete-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) {
    }

    @Post()
    createCity(@Body(ValidationPipe) body: CreateCityDto ) {
        return this.cityService.createCity(body);
    }

    @Get()
    getAllCity() {
        return this.cityService.getAllCity();
    }

    @Put()
    updateCity(@Body(ValidationPipe) body : UpdateCityDto){
        return this.cityService.updateCity(body);
    }
    
    @Delete()
    deleteCity(@Body(ValidationPipe) body: DeleteCityDto) {
        return this.cityService.deleteCity(body.id);
    }

}
