import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { CityModule } from './city/city.module';
import { City } from './city/city.entity';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/customer.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.entity';
import { DistrictModule } from './district/district.module';
import { District } from './district/district.entity';
import { WardModule } from './ward/ward.module';
import { Ward } from './ward/ward.entity';
import { AddressModule } from './address/address.module';
import { Address } from './address/address.entity';
import { PermissionModule } from './permission/permission.module';
import { Permission } from './permission/permission.entity';
import { UserPermissionModule } from './user-permission/user-permission.module';
import { UserPermission } from './user-permission/user-permission.entity';
import { BillModule } from './bill/bill.module';
import { Bill } from './bill/bill.entity';
import { BillDetailModule } from './bill-detail/bill-detail.module';
import { BillDetail } from './bill-detail/bill-detail.entity';
import { ImageModule } from './image/image.module';
import {Image} from './image/image.entity';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ecommerce',
      entities: [
        User,
        City,
        Customer,
        Product,
        District,
        Ward,
        Address,
        Permission,
        UserPermission,
        Bill,
        BillDetail,
        Image
      ],
      synchronize: true,
    }),
    UserModule,
    CityModule,
    CustomerModule,
    ProductModule,
    DistrictModule,
    WardModule,
    AddressModule,
    PermissionModule,
    UserPermissionModule,
    BillModule,
    BillDetailModule,
    ImageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
