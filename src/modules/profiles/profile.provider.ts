/* eslint-disable prettier/prettier */
import { Profile } from 'src/core/models/profile.model';
import {PROFILE_REPOSITORY} from '../../core/constants';

export const proProviders = [{
    provide: PROFILE_REPOSITORY,
    useValue:Profile
}]