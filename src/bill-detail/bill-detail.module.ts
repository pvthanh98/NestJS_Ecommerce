import { Module } from '@nestjs/common';
import { BillDetailService } from './bill-detail.service';
import { BillDetailController } from './bill-detail.controller';
import { BillDetail } from './bill-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([BillDetail])],
  providers: [BillDetailService],
  controllers: [BillDetailController]
})
export class BillDetailModule {}
