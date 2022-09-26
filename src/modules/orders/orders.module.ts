/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { orderProviders } from './order.provider';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService,...orderProviders]
})
export class OrdersModule {}
