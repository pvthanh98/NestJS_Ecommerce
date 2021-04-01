import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { DeleteImageDto } from './dto/delete-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImageService } from './image.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.imageService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(ValidationPipe) image: CreateImageDto) {
    return this.imageService.create(image);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  update(@Body(ValidationPipe) image: UpdateImageDto) {
    return this.imageService.update(image);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  delete(@Body(ValidationPipe) image: DeleteImageDto) {
    return this.imageService.delete(image.id);
  }
}
