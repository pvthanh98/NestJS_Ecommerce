import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { CreateWardDto } from './dto/create.dto';
import { DeleteWardDto } from './dto/delete-ward.dto';
import { FindwardByDistrictDto } from './dto/find-ward-by-district.dto';
import { UpdateWardDto } from './dto/update.dto';
import { WardService } from './ward.service';

@Controller('ward')
export class WardController {
    constructor(private readonly wardService : WardService){}
    
    @Get("all")
    getAll() {
        return this.wardService.getAll();
    }

    @Get("district/:id")
    findWardByDistrictId(@Param() params: FindwardByDistrictDto) {
        return this.wardService.findWardByDistrictId(params.id)
    }

    @Post()
    create(@Body(ValidationPipe) body: CreateWardDto){
        return this.wardService.create(body);
    }

    @Put()
    update(@Body(ValidationPipe) body: UpdateWardDto) {
        return this.wardService.update(body);
    }

    @Delete()
    delete(@Body(ValidationPipe) body: DeleteWardDto) {
        return this.wardService.delete(body.id);
    }

}
 