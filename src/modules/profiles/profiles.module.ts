/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { proProviders } from './profile.provider';

@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService,...proProviders]
})
export class ProfilesModule {}
