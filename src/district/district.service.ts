import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { District } from './district.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDistrictDto } from './dto/create-district.dto';
import { catchError } from 'src/database/error-handler';
import { UpdateDistrictDto } from './dto/update-district.dto';
@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>,
  ) {}

  createDistrict(district: CreateDistrictDto): Promise<any> {
    try {
      return this.districtRepository.save(district);
    } catch (e) {
      catchError(e);
    }
  }

  getAllDistrict(): Promise<District[]> {
    return this.districtRepository.find();
  }

  getByCityId(cityId: number): Promise<District[]> {
    return this.districtRepository.find({
        where: {cityId}
    });
  }

  async updateDistrict(newDistrict : UpdateDistrictDto): Promise<District> {
    const district = await this.districtRepository.findOne({where:{
        id:newDistrict.id
    }})
    if(district) {
        district.name = newDistrict.name;
        district.cityId = newDistrict.cityId;
        try{
            return this.districtRepository.save(district);
        } catch (e) {
            catchError(e)
        }

    } else throw new NotFoundException({
        code:"NOT_FOUND_EXCEPTION",
        message: "District not found"
    })
  }

    deleteDistrict (districtId: number): Promise<any> {
        return this.districtRepository.delete({id:districtId})
    }
}
