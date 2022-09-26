/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { restProviders } from './restaurant.provider';

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService,...restProviders],
})
export class RestaurantModule {}
