/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { PROFILE_REPOSITORY } from 'src/core/constants';
import { Profile } from 'src/core/models/profile.model';
import { CreateProfileDto } from './dto/create-profile.dto';


@Injectable()
export class ProfilesService {
  constructor(@Inject(PROFILE_REPOSITORY) private readonly profile:typeof Profile){}
 async create(createProfileDto: CreateProfileDto){
    return await this.profile.create<Profile>(createProfileDto);
  }

  async findAll() {
    return await this.profile.findAll<Profile>();
  }

  async findOne(id: any) {
    return await this.profile.findOne<Profile>(id)
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedUser]] = await this.profile.update({ ...data }, { where: { id}, returning: true });

    return { numberOfAffectedRows, updatedUser };
}   

async remove(id:any) {
  return await this.profile.destroy({ where: { id } });
}
}
