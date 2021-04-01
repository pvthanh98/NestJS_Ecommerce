import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError } from 'src/database/error-handler';
import { Repository } from 'typeorm';
import { Bill } from './bill.entity';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill)
    private billRepository: Repository<Bill>,
  ) {}

  async create(bill: CreateBillDto): Promise<Bill> {
    try {
      return await this.billRepository.save(bill);
    } catch (e) {
      catchError(e);
    }
  }

  async update(newBill: UpdateBillDto): Promise<Bill> {
    const bill = await this.billRepository.findOne({
      where: { id: newBill.id },
    });
    bill.totalCost = newBill.totalCost;
    bill.deliveryAddress = newBill.deliveryAddress;
    bill.customerId = newBill.customerId;
    bill.userId = newBill.userId;
    bill.isPaid = newBill.isPaid;
    bill.status = newBill.status;
    bill.paymentDate = newBill.paymentDate;
    bill.deliveryPhoneNumber = newBill.deliveryPhoneNumber;
    try {
      return this.billRepository.save(bill);
    } catch (e) {
      catchError(e);
    }
  }

  getAll(): Promise<Bill[]> {
    return this.billRepository.createQueryBuilder("bill")
    .select(["bill","customer.id","customer.name","user.id","user.name"])
    .leftJoin("bill.customer","customer")
    .leftJoin("bill.user","user")
    .getMany();
  }

  detete(billId: number): Promise<any> {
    return this.billRepository.delete({ id: billId });
  }
  
}
