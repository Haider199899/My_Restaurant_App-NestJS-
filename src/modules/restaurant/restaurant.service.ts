/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';

import { RESTAURANT_REPOSITORY } from 'src/core/constants';

import { Restaurant } from 'src/core/models/restaurant.model';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @Inject(RESTAURANT_REPOSITORY)
    private readonly resRepository: typeof Restaurant,
  ) {}
  async create(createRestaurantDto: CreateRestaurantDto) {
    /*  const user=createRestaurantDto.user_id;
       console.log('elo')
       const type=new Profile();
       for(const user_type in type){
        console.log(type)
        if(user_type==='Owner'){
        */
    return await this.resRepository.create<Restaurant>(createRestaurantDto);
  }

  async findAll() {
    return await this.resRepository.findAll<Restaurant>();
  }

  async findOne(id: any) {
    return await this.resRepository.findOne<Restaurant>(id);
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedUser]] =
      await this.resRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedUser };
  }

  async remove(id: any) {
    return await this.resRepository.destroy({ where: { id } });
  }
}
