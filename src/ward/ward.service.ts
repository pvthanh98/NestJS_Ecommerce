import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError } from 'src/database/error-handler';
import { Repository } from 'typeorm';
import { CreateWardDto } from './dto/create.dto';
import { UpdateWardDto } from './dto/update.dto';
import { Ward } from './ward.entity';
@Injectable()
export class WardService {
  constructor(
    @InjectRepository(Ward)
    private wardRepository: Repository<Ward>,
  ) {}

  getAll(): Promise<Ward[]> {
      return this.wardRepository.find();
  }

  async create(ward : CreateWardDto): Promise<Ward> {
      try{
        return await this.wardRepository.save(ward);
      } catch(e){
          catchError(e);
      }
  }

  async update(newWard: UpdateWardDto): Promise<Ward> {
     const ward = await this.wardRepository.findOne({where:{id:newWard.id}}) ;
     if(ward) {
         ward.name= newWard.name;
         ward.districtId = newWard.districtId;
         try {
            return await this.wardRepository.save(ward);
         } catch(e) {
             catchError(e)
         }
     } else throw new NotFoundException({
         code:"NOT_FOUND_EXCEPTION",
         message:"WARD_NOT_FOUND"
     })
  }

  async delete (wardId: number): Promise<any> {
    const ward = await this.wardRepository.findOne({where:{id:wardId}});
    if(ward) {
        try{
            return this.wardRepository.delete(ward);
        } catch(e) { catchError(e) }
    }
    else throw new NotFoundException({
        code:"NOT_FOUND_EXCEPTION",
        message:"WARD_NOT_FOUND"
    })
  }

  findWardByDistrictId(districtId: number) : Promise<Ward[]>{
    return this.wardRepository.find({where:{districtId}})
  }
}
