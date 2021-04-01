import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {District} from './district.entity';
@Module({
  imports:[TypeOrmModule.forFeature([District])],
  providers: [DistrictService],
  controllers: [DistrictController]
})
export class DistrictModule {}
 