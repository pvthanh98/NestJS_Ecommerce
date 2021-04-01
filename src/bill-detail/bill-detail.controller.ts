import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  ValidationPipe,
  UseGuards
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BillDetailService } from './bill-detail.service';
import { CreateBillDetailDto } from './dto/create-bill-detail.dto';
import { DeleteBillDetailDto } from './dto/delete-bill-detail';
import { UpdateBillDetailDto } from './dto/update-bill-detail.dto';

@Controller('bill-detail')
export class BillDetailController {
  constructor(private readonly service: BillDetailService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(ValidationPipe) billDetail: CreateBillDetailDto) {
    return this.service.create(billDetail);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.service.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  update(@Body(ValidationPipe) billDetail: UpdateBillDetailDto) {
    return this.service.update(billDetail);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  delete(@Body(ValidationPipe) bill: DeleteBillDetailDto) {
      return this.service.delete(bill);
  }
}
