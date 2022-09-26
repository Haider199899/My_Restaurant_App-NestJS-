/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { AuthGuard } from '@nestjs/passport';
import { NotFoundException } from '@nestjs/common/exceptions';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('addProfile')
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('getAll')
  findAll() {
    return this.profilesService.findAll();
  }
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(+id);
  }
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: any, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(id, updateProfileDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
 async remove(@Param('id') id: any) {
    const deleted= await this.profilesService.remove(id);

    if (deleted === 0) {
      throw new NotFoundException('This User doesn\'t exist');
  }

  // return success message
  return 'Successfully deleted';
  }
}
