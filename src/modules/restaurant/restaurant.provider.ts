/* eslint-disable prettier/prettier */
import { Restaurant } from 'src/core/models/restaurant.model';
import {RESTAURANT_REPOSITORY } from '../../core/constants';

export const restProviders = [{
    provide: RESTAURANT_REPOSITORY,
    useValue:Restaurant,
}]