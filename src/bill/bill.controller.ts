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
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { DeleteBillDto } from './dto/delete-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(ValidationPipe) body: CreateBillDto) {
    return this.billService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.billService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  update(@Body(ValidationPipe) body: UpdateBillDto) {
    return this.billService.update(body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  delete(@Body(ValidationPipe) body: DeleteBillDto) {
    return this.billService.detete(body.id);
  }
}
