import {
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError } from 'src/database/error-handler';
import { Repository } from 'typeorm';
import { City } from './city.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  createCity(city: CreateCityDto): Promise<any> {
    try {
      return this.cityRepository.save(city);
    } catch (e) {
      throw new NotImplementedException({
        code: 'NOT_IMPLEMENT',
        message: 'City not inserted',
      });
    }
  }

  getAllCity(): Promise<City[]> {
    return this.cityRepository.find();
  }

  async updateCity(cityInfo: UpdateCityDto): Promise<any> {
    const city = await this.cityRepository.findOne({
      where: { id: cityInfo.id },
    });
    if (city) {
      city.name = cityInfo.name;
      return this.cityRepository.save(city);
    } else
      throw new NotFoundException({
        code: 'NOT_FOUND_EXCEPTION',
        message: 'CITY_NOT_FOUND',
      });
  }

  deleteCity (cityId: number): Promise<any> {
      try {
        return this.cityRepository.delete({id:cityId});
      } catch(e){
          catchError(e);
      }
  }
}
