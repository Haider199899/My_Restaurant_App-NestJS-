/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/core/models/user.model';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';
import {bcrypt} from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) { }

    async create(user: UserDto): Promise<User> {
        return await this.userRepository.create<User>(user);
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { email } });
    }

    async findOneById(id: number): Promise<User> {
        console.log(id)
        return await this.userRepository.findOne<User>({ where: { id } });
    }
    async delete(id) {
        return await this.userRepository.destroy({ where: { id } });
    }

    async update(id, data) {
      //data.password=this.hashPassword(data.password)
        const [numberOfAffectedRows, [updatedUser]] = await this.userRepository.update({ ...data }, { where: { id}, returning: true });

        return { numberOfAffectedRows, updatedUser };
    }   
    private async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }
    

}