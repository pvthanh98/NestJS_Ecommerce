import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError } from 'src/database/error-handler';
import { Repository } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image) private imageRepository: Repository<Image>,
  ) {}

  getAll(): Promise<Image[]> {
    return this.imageRepository.find();
  }

  async create(image: CreateImageDto): Promise<Image> {
    try {
      return await this.imageRepository.save(image);
    } catch (e) {
      catchError(e);
    }
  }

  async update (newImage: UpdateImageDto) : Promise<Image> {
      const image = await this.imageRepository.findOne({where:{id:newImage.id}});
      if(!image) throw new NotFoundException({
          code:"NOT_FOUND_EXCEPTION",
          message:"IMAGE_NOT_FOUND"
      });

      try{
          image.url = newImage.url;
          image.productId = newImage.productId;
          image.publicId = newImage.publicId;
          return this.imageRepository.save(image);
      } catch(e) { catchError(e); }
  }

  delete (id: number) : Promise<any> {
      return this.imageRepository.delete({id})
  }
}
