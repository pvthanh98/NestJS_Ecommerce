import { Module } from '@nestjs/common';
import { BillDetailService } from './bill-detail.service';
import { BillDetailController } from './bill-detail.controller';

@Module({
  providers: [BillDetailService],
  controllers: [BillDetailController]
})
export class BillDetailModule {}
