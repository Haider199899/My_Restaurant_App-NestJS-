/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { AuthGuard } from '@nestjs/passport';
import { NotFoundException } from '@nestjs/common/exceptions';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('addRes')
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.create(createRestaurantDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('getAll')
  findAll() {
    return this.restaurantService.findAll();
  }
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.restaurantService.findOne(id);
  }
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: any, @Body() updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantService.update(id, updateRestaurantDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
 async remove(@Param('id') id: string) {
    const deleted=await this.restaurantService.remove(id);

    
    if (deleted === 0) {
      throw new NotFoundException('This User doesn\'t exist');
  }

  // return success message
  return 'Successfully deleted';

  }
}
