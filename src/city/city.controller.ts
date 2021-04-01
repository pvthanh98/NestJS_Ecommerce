import { Body, Controller, Delete, Get, Post, Put, ValidationPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CityService } from "./city.service";
import { CreateCityDto } from "./dto/create-city.dto";
import { DeleteCityDto } from './dto/delete-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) {
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createCity(@Body(ValidationPipe) body: CreateCityDto ) {
        return this.cityService.createCity(body);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllCity() {
        return this.cityService.getAllCity();
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateCity(@Body(ValidationPipe) body : UpdateCityDto){
        return this.cityService.updateCity(body);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete()
    deleteCity(@Body(ValidationPipe) body: DeleteCityDto) {
        return this.cityService.deleteCity(body.id);
    }

}
