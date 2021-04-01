import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError } from 'src/database/error-handler';
import { Repository } from 'typeorm';
import { BillDetail } from './bill-detail.entity';
import { CreateBillDetailDto } from './dto/create-bill-detail.dto';
import { DeleteBillDetailDto } from './dto/delete-bill-detail';
import { UpdateBillDetailDto } from './dto/update-bill-detail.dto';

@Injectable()
export class BillDetailService {
  constructor(
    @InjectRepository(BillDetail)
    private billDetailRepository: Repository<BillDetail>,
  ) {}
  async create(billDetail: CreateBillDetailDto): Promise<BillDetail> {
    try {
      return await this.billDetailRepository.save(billDetail);
    } catch (e) {
      catchError(e);
    }
  }

  getAll(): Promise<BillDetail[]> {
    return this.billDetailRepository.find();
  }

  async update(newBillDetail: UpdateBillDetailDto): Promise<BillDetail> {
    const billDetail = await this.billDetailRepository.findOne({
      where: {
        productId: newBillDetail.productId,
        billId: newBillDetail.billId,
      },
    });
    if (!billDetail)
      throw new NotFoundException({
        code: 'NOT_FOUND_EXCEPTION',
        message: 'BILL_DETAIL_NOT_FOUND',
      });

    try {
      billDetail.quantity = newBillDetail.quantity;
      billDetail.price = newBillDetail.price;
      return await this.billDetailRepository.save(billDetail);
    } catch (e) {
      catchError(e);
    }
  }

  delete(deleteBill: DeleteBillDetailDto): Promise<any> {
    return this.billDetailRepository.delete({
      billId: deleteBill.billId,
      productId: deleteBill.productId,
    });
  }

  

}
